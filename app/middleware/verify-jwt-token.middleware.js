// JWT 토큰 검증 미들웨어
/*
 - 토큰 검증에 실패 시 401 에러 발생
 - 아래 코드는 라우터에서 인증이 필요한 API
 - 인증이 필요한 API는 JWT 검증 미들웨어를 통과해야 한다.
 - 헤더의 authorization에서 토큰을 가져오는데 토큰이 없는 경우 401 에러를 발생.
   토큰 검증 함수 verify에서는 토큰과  JWT_SECRET (tokenType)으로 올바른 토큰인지 검증한다.
   올바르지 않은 토큰이면 401에러를 발생하고, 올바른 토큰이면 req.userId에 userId 정보를 입력한다.
   이 userId는 로그인이나 회원가입 시 토큰을 생성할 때 만든 값이다.
   토큰 검증이 완료되면 next 함수를 통해서 API의 컨트롤러 부분을 실행한다.
*/
const jwt = require('jsonwebtoken');

/**
 * @param {*} tokenType 토큰 유형
 */
const verifyToken = (tokenType) => {
    return (req, res, next) => {
        const token = req.headers["authorization"]
            ? req.headers["authorization"].split(" ")[1] // bearer가 있는 경우
            : null;

        if (!token) {
            return res.status(401).send({
                statusCode: 401,
                message: "Unauthorized",
            });
        }

        jwt.verify(token, tokenType, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    statusCode: 401,
                    message: "Unauthorized",
                    error: err,
                });
            }
            req.userId = decoded.id;
            next();
        });
    };
};

const authJwt = {};
authJwt.verifyToken = verifyToken;
module.exports = authJwt;