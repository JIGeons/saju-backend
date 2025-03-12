const { GroupMember, Group, Member, Sequelize, sequelize } = require("../models");
const req = require("express/lib/request");

// utils
const { getPagination } = require("../commons/utils");
const {validationResult} = require("express-validator");

/**
 * 그룹에 멤버 추가
 */
exports.addMemberToGroup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const result = errors.array();
    return res.status(400).send({
      statusCode: 400,
      message: "잘못된 요청값 입니다.",
      error: result,
    });
  }

  const groupId = req.params.groupId;
  const memberId = req.params.memberId;
  const userId = req.userId;

  const t = await sequelize.transaction();

  console.log("userId: ", + userId);

  try {
    const group = await Group.findOne({
      where: {
        id: groupId,
        userId: userId,
      },
      transaction: t
    });

    if (!group) {
      await t.rollback();
      return res.status(403).send({
        statusCode: 403,
        message: "해당 그룹에 멤버 추가 권한이 없습니다."
      });
    }

    const member = await Member.findOne({
      where: {
        id: memberId,
        userId: userId,
      },
      transaction: t
    });

    if (!member) {
      await t.rollback();
      return res.status(403).send({
        statusCode: 403,
        message: "해당 그룹에 멤버 추가 권한이 없습니다."
      });
    }

    const groupMember = await GroupMember.findOne({
      where: {
        groupId: groupId,
        memberId: memberId,
      },
      transaction: t
    });

    if (groupMember) {
      await t.rollback();
      return res.status(409).send({
        statusCode: 409,
        message: "해당 그룹에 같은 멤버가 존재합니다."
      });
    }

    const createGroupMemberResult = await GroupMember.create({
      groupId: groupId,
      memberId: memberId,
    }, {
      transaction: t
    });

    await t.commit();
    return res.status(201).send({
      statusCode: 201,
      message: "그룹에 멤버 추가 성공",
      data: createGroupMemberResult,
    })
  } catch (error) {
    console.error("### Add MemberToGroup Error:", error);
    await t.rollback();
    next(`${req.method} ${req.url} : ` + error);
  }
};


/**
 * 그룹별 멤버 리스트
 */
exports.getGroupMemberList = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const result = errors.array();
    return res.status(400).send({
      statusCode: 400,
      message: "잘못된 요청값 입니다.",
      error: result,
    });
  }

  const page = req.query.page !== "NaN" ? req.query.page : 0;
  const size = req.query.size;
  const { limit, offset } = getPagination(page, size);
  const userId = req.userId;
  const groupId = req.params.groupId;

  try {
    const group = await Group.findOne({
      where: { userId: userId, id: groupId },
    });

    if (!group) {
      return res.status(403).send({
        statusCode: 403,
        message: "해당 그룹에 대한 권한 없습니다.",
      });
    }

    const groupMember = await GroupMember.findAndCountAll({
      where: { groupId: groupId },
      include: [
        {
          model: Member,
          attributes: [
            "id",
            "type",
            "nickname",
            "birthday",
            "birthdayType",
            "gender",
            "time",
            [
              Sequelize.literal("(SELECT YEAR(CURRENT_DATE) - YEAR(birthday) + 1 FROM members where id = Member.id)"),
              "age",  // 나이
            ],
            "createdAt",
          ],
        },
      ],
      order: [["createdAt", "DESC"]],
      limit,
      offset,
    });

    // map으로 처리
    const rows = groupMember["rows"].map((groupMember) => {
      const birthYear = Number(String(groupMember.Member.birthday).split("-")[0]);
      return {
        id: groupMember.Member.id,
        type: groupMember.Member.type,
        nickname: groupMember.Member.nickname,
        gender: groupMember.Member.gender,
        birthdayType: groupMember.Member.birthdayType,
        birthday: groupMember.Member.birthday,
        time: groupMember.Member.time,
        age: new Date().getFullYear() - birthYear + 1,
        createdAt: groupMember.Member.createdAt,
      };
    });

    const members = await getPagingData({ count: groupMember["count"], rows }, page, limit);

    return res.status(200).send({
      statusCode: 200,
      message: "그룹별 멤버 리스트 성공",
      data: {
        group: group,
        members: members,
      },
    });
  } catch (error) {
    console.error("### Get GroupMemberList Error:", error);
    next(`${req.method} ${req.url} : ` + error);
  }
}

/**
 * 그룹에서 멤버 제거
 */
exports.removeMemberFromGroup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const result = errors.array();
    return res.status(400).send({
      statusCode: 400,
      message: "잘못된 요청값 입니다.",
      error: result,
    });
  }
  
  const userId = req.userId;
  const groupId = req.params.groupId;
  const memberId = req.params.memberId;

  const t = await sequelize.transaction();

  try {
    const group = await Group.findOne({
      where: { userId: userId, id: groupId },
      transaction: t
    });

    if (!group) {
      await t.rollback();
      return res.status(403).send({
        statusCode: 403,
        message: "해당 그룹에서 멤버 제거 권한이 없습니다.",
      });
    }

    const member = await Member.findOne({
      where: { userId: userId, id: memberId },
      transaction: t
    });

    await GroupMember.destroy({
      where: { groupId: groupId, memberId: memberId },
      transaction: t
    });

    await t.commit();
    return res.status(200).send({
      statusCode: 200,
      message: "그룹에서 멤버 제거 성공",
    });
  } catch (error) {
    console.error("### Remove Member From Group Error:", error);
    await t.rollback();
    next(`${req.method} ${req.url} : ` + error);
  }
}


const getPagingData = async (data, page, limit) => {
  const { count: totalItems, rows: memberList } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, totalPages, currentPage, memberList };
};

