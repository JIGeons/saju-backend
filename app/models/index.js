/**
 * 시퀄라이즈 설정파일에서 값을 가져와서 sequelize 객체 생성
 */
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'dev';
const config = require(__dirname + '/../configs/sequelize.config.js')[env]; // sequelize.config.js 파일에서 환경별 DB 설정을 불러온다.

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;