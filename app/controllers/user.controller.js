const { User, Member, MemberManse } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const sajuService = require("../commons/birth-to-saju");
const { validationResult } = require("express-validator");
const { sequelize } = require('../models');

/**
 * 회원가입
 */
exports.signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const result = errors.array();
        return res.status(400).send({
            statusCode: 400,
            message: "잘못된 요청값 입니다.",
            error: result,
        });
    }

    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 8); // 패스워드 암호화
    const nickname = req.body.nickname;
    const gender = req.body.gender;
    const birthdayType = req.body.birthdayType;
    const birthday = String(req.body.birthday).replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
    const time = req.body.time ? String(req.body.time).replace(/(\d{2})(\d{2})/g, "$1:$2") : null;

    // 트랜잭션 생성
    const t = await sequelize.transaction();

    try {
        const existUserEmail = await User.findOne({
            where: { email },
            transaction: t
        });

        if (existUserEmail) {
            await t.rollback();     // 트랜잭션 종료
            return res.status(409).send({
                statusCode: 409,
                message: "이미 사용중인 이메일 입니다.",
            });
        }

        // 트랜잭션에서 user 생성
        const user = await User.create({
            email,
            password,
        }, {
            transaction: t
        });

        // 트랜잭션에서 member 생성
        const member = await Member.create({
            userId: user.id,
            type: "USER",
            nickname,
            gender,
            birthday,
            birthdayType,
            time,
        }, {
            transaction: t
        });

        // 생년월일시를 사주로 변환
        await sajuService.convertBirthtimeToSaju(member, t);

        const accessToken = jwt.sign(
            {
                id: user.id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d',
            }
        );

        // 성공 시 트랜잭션 커밋
        console.log("트랜잭션 커밋 시작");
        await t.commit();
        console.log("트랜잭션 커밋 성공");
        return res.status(201).send({
            statusCode: 201,
            message: "회원가입 성공",
            data: {accessToken: accessToken},
        });
    } catch (err) {
        console.log("error message: ", err);
        // 실패 시 트랜잭션 롤백
        await t.rollback();
        next(`${req.method} ${req.url} : ` + err);
    }
};

/**
 * 로그인
 */
exports.signin = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const result = errors.array();
        return res.status(400).send({
            statusCode: 400,
            message: "잘못된 요청값 입니다.",
            error: result,
        });
    }

    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(401).send({
                statusCode: 401,
                message: "로그인 실패",
            });
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                statisCode: 401,
                message: "로그인 실패"
            });
        }

        const accessToken = jwt.sign(
            {
                id: user.id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d',
            }
        );

        return res.status(200).send({
            statusCode: 200,
            message: "로그인 성공",
            data: { accessToken: accessToken },
        });
    } catch (err) {
        next(`${req.method} ${req.url} : ` + err);
    }
};

/**
 * 내 정보 보기
 */
exports.me = async (req, res, next) => {
    const userId = req.userId;

    try {
        const user = await User.findOne({
            attributes: ["id"],
            where: {
                id: userId,
            },
            include: [
                {
                    model: Member,
                    where: {
                        type: "USER",
                    },
                    include: [{ model: MemberManse }],
                },
            ],
        });

        return res.status(200).send({
            statusCode: 200,
            message: "내정보보기 성공",
            data: user,
        });
    } catch (err) {
        next(`${req.method} ${req.url} : ` + err);
    }
}