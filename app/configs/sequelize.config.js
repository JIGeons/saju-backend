/**
 * .env를 활용해 값을 가져온다.
 */
require('dotenv').config(); // .env 파일을 읽어서 환경변수 process.env에 로드

module.exports = {
    dev: {
        username: process.env.DEV_DB_USERNAME,  // 개발 DB 사용자명
        password: process.env.DEV_DB_PASSWORD,  // 개발 DB 비밀번호
        database: process.env.DEV_DB_DATABASE,  // 개발 DB명
        host: process.env.DEV_DB_HOST,          // 개발 DB 호스트 (예: localhost, 127.0.0.1)
        port: process.env.DEV_DB_PORT,          // 개발 DB 포트 (MySQL 기본값 3306)
        dialect: 'mysql',                       // DBMS 종료 (MySQL 사용)
        logging: false,                         // 콘솔 로그 비활성화
        dialectOptions: {
            dateStrings: true,  // 날짜 데이터를 문자열로 처리 (timestamp -> string)
            typeCast: true,     // MySQL 데이터 타입 변환 가능
        },
        timezone: '+09:00',     // 한국 시간대 설정
    },
    prod: {
        host: process.env.PROD_DB_HOST,
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_DATABASE,
        port: 3306,
        dialect: 'mysql',
        logging: false,
        dialectOptions: {
            dateStrings: true,
            typeCast: true,
        },
        timezone: '+09:00',
    },
};