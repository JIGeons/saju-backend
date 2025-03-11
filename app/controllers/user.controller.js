const { User, Member, MemberManse } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");

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

    try {
        const existUserEmail = await User.findOne({
            where: {
                email,
            },
        });

        if (existUserEmail) {
            return res.status(409).send({
                statusCode: 409,
                message: "이미 사용중인 이메일 입니다.",
            });
        }

        const user = await User.create({
            email,
            password,
        });

        const member = await Member.create({
            userId: user.id,
            type: "USER",
            nickname,
            gender,
            birthday,
            birthdayType,
            time,
        });

        const accessToken = jwt.sign(
            {
                id: user.id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d',
            }
        );

        return res.status(201).send({
            statusCode: 201,
            message: "회원가입 성공",
            data: {accessToken: accessToken},
        });
    } catch (err) {
        console.log("error message: " + err.message);
        next(`${req.method} ${req.url} : ` + err);
    }
};