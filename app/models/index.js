/**
 * 시퀄라이즈 설정파일에서 값을 가져와서 sequelize 객체 생성
 */
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'dev';
const config = require(__dirname + '/../configs/sequelize.config.js')[env];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;