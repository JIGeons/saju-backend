const { Group, Sequelize, sequelize } = require('../models');
const { validationResult } = require('express-validator');

// utils
const { getPagination } = require('../commons/utils');

/**
 * 그룹 추가
 */
exports.addGroup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const result = errors.array();
    return res.status(400).send({
      statusCode: 400,
      message: "잘못된 요청값 입니다.",
      errors: result,
    });
  }

  const name = req.body.name;
  const userId = req.userId;

  const t = await sequelize.transaction();

  try {
    await Group.create({
      userId,
      name
    }, {
      transaction: t
    });


    await t.commit();
    return res.status(201).send({
      statusCode: 201,
      message: "그룹 추가 성공",
    });
  } catch (error) {
    console.error("### Add Group error : ", error);
    await t.rollback();
    next(`${req.method} ${req.url} : ` + error);
  }
}

/**
 * 그룹 리스트
 */
exports.getGroups = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const result = errors.array();
    return res.status(400).send({
      statusCode: 400,
      message: "잘못된 요청값 입니다.",
      errors: result,
    });
  }

  const page = req.query.page !== "NaN" ? req.query.page : 0;
  const size = req.query.size;
  const { limit, offset } = getPagination(page, size);
  const userId = req.userId;

  try {
    const result = await Group.findAndCountAll({
      where: { userId: userId },
      order: [["createdAt", "DESC"]],
      attributes: [
        "id",
        "name",
        "createdAt",
        [
          Sequelize.literal("(SELECT COUNT(*) FROM group_members where groupId = Group.id)"),
          "memberCount",  // 멤버 수
        ],
      ],
      limit,
      offset,
    });
    const response = await getPagingData(result, page, limit);

    return res.status(200).send({
      statusCode: 200,
      message: "그룹 리스트 성공",
      data: response,
    });
  } catch (error) {
    console.error("### Get Groups error : ", error);
    next(`${req.method} ${req.url} : ` + error);
  }
}

/**
 * 그룹 수정
 */
exports.updateGroup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const result = errors.array();
    return res.status(400).send({
      statusCode: 400,
      message: "잘못된 요청값 입니다.",
      errors: result,
    });
  }

  const userId = req.userId;
  const groupId = req.params.id;
  const name = req.body.name;

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
        message: "해당 그룹의 수정 권한이 없습니다."
      })
    }

    await Group.update(
      { name: name },
      {
        where: { id: groupId },
      },
      { transaction: t }
    );

    await t.commit();
    return res.status(200).send({
      statusCode: 200,
      message: "그룹 수정 성공",
    });
  } catch (error) {
    console.error("### Update Group error : ", error);
    await t.rollback();
    next(`${req.method} ${req.url} : ` + error);
  }
}

/**
 * 그룹 삭제
 */
exports.deleteGroup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const result = errors.array();
    return res.status(400).send({
      statusCode: 400,
      message: "잘못된 요청값 입니다.",
      errors: result,
    });
  }

  const userId = req.userId;
  const groupId = req.params.id;

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
        message: "해당 그룹의 삭제 권한이 없습니다."
      });
    }

    await Group.destroy({
      where: { id: groupId },
      transaction: t
    });

    await t.commit();
    return res.status(200).send({
      statusCode: 200,
      message: "그룹 삭제 성공",
    })
  } catch (error) {
    console.error("### Delete Group error : ", error);
    await t.rollback();
    next(`${req.method} ${req.url} : ` + error);
  }
}

/**
 * 그룹명 리스트
 */
exports.getGroupNames = async (req, res, next) => {
  const userId = req.userId;

  try {
    const result = await Group.findAll({
      where: { userId: userId },
      order: [["createdAt", "DESC"]],
      attributes: ["id", "name"],
    });

    return res.status(200).send({
      statusCode: 200,
      message: "그룹명 리스트 성공",
      data: result,
    });
  } catch (error) {
    console.error("### Get GroupNames error : ", error);
    next(`${req.method} ${req.url} : ` + error);
  }
}

const getPagingData = async (data, page, limit) => {
  const { count: totalItems, rows: groupList } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, totalPages, currentPage, groupList };
}

