const Sequelize = require("sequelize");

module.exports = class Manse extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                solarDate: {
                    type: Sequelize.DATEONLY,
                    allowNull: false,
                },
                lunarDate: {
                    type: Sequelize.DATEONLY,
                    allowNull: false,
                },
                season: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                },
                seasonStartTime: {
                    type: Sequelize.STRING(20),
                    allowNull: true,
                },
                leapMonth: {
                    type: Sequelize.BOOLEAN,
                    allowNull: true,
                },
                yearSky: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                },
                yearGround: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                },
                monthSky: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                },
                monthGround: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                },
                daySky: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                },
                dayGround: {
                    type: Sequelize.STRING(10),
                    allowNull: true,
                },
            },
            {
                sequelize,
                timestamps: true,
                modelName: "Manse",
                tableName: "manses",
                paranoid: false,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
};