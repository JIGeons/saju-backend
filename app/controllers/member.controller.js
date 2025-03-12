const { Member, MemberManse, Sequelize, sequelize } = require("../models");
const SajuService = require("../commons/birth-to-saju");

/**
 * 멤버 추가
 */
exports.addMember = async (req, res, next) => {
  const nickname = req.body.nickname;
  const gender = req.body.gender;
  const birthdayType = req.body.birthdayType;
  const birthday = String(req.body.birthday).replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
  const time = req.body.time ? String(req.body.time).replace(/(\d{2})(\d{2})/g, "$1:$2") : null;
  const userId = req.userId;

  const t = await sequelize.transaction();
  try {
    const member = await Member.create({
      userId,
      nickname,
      gender,
      birthday,
      birthdayType,
      time,
      type: "MEMBER"
    }, {
      transaction: t,
    });

    // 생년월일시를 사주로 변환
    await SajuService.convertBirthtimeToSaju(member, t);

    // 성공시 트랜잭션 커밋
    await t.commit()
    return res.status(201).send({
      statusCode: 201,
      message: "멤버 추가 성공,"
    });
  } catch (error) {
    console.error("### Add Member error message: ", error);
    // 에러시 트랜잭션 롤백
    await t.rollback();
    next(`${req.method} ${req.url} : ` + error);
  }
};

const getPagination = (page, size) => {
  const limit = size ? +size : 0;
  const offset = page ? page * limit : 0;

  return { limit, offset };
}

const getPagingData = async (data, page, limit) => {
  const { count: totalItems, rows: memberList } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, totalPages, currentPage, memberList };
};

/**
 * 멤버 리스트
 */
exports.getMembers = async (req, res, next) => {
  const page = req.query.page !== "NaN" ? req.query.page : 0;
  const size = req.query.size;
  const { limit, offset } = getPagination(page, size);
  const userId = req.userId;

  try {
    const result = await Member.findAndCountAll({
      where: { userId: userId },
      order: [["createdAt", "DESC"]],
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
      limit,
      offset,
    });
    const response = await getPagingData(result, page, limit);

    return res.status(200).send({
      statusCode: 200,
      message: "멤버 리스트 성공",
      data: response,
    });
  } catch (error) {
    console.log("### Get Members Error:", error);
    next(`${req.method} ${req.url} : ` + error);
  }
}

/**
 * 멤버 삭제
 */
exports.deleteMember = async (req, res, next) => {
  const userId = req.userId;
  const memberId = req.params.id;

  // 트랜잭션 생성
  const t = await sequelize.transaction();

  try {
    const member = await Member.findOne({
      where: { userId: userId, id: memberId },
      transaction: t
    });

    // 멤버가 존재하지 않는 경우
    if (!member) {
      await t.rollback(); // 트랜잭션 롤백
      return res.status(404).send({
        statusCode: 403,
        message: "해당 멤버의 삭제 권한이 없습니다."
      });
    }

    // 멤버 타입이 유저인 경우
    if (member && member.type === "USER") {
      await t.rollback(); // 트랜잭션 롤백
      return res.status(403).send({
        statusCode: 403,
        message: "본인에 대한 삭제 권한이 없습니다.",
      })
    }

    // 멤버 만세 삭제
    await MemberManse.destroy({
      where: { userId: userId },
      transaction: t
    });

    // 멤버 삭제
    await Member.destroy({
      where: { id: memberId },
      transaction: t
    });

    // 삭제 성공시 트랜잭션 커밋
    await t.commit();
    return res.status(200).send({
      statusCode: 200,
      message: "멤버 삭제 성공",
    })
  } catch (error) {
    console.error("#### Get Members Error:", error);
    await t.rollback();
    next(`${req.method} ${req.url} : ` + error);
  }
}