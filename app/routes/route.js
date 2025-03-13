const express = require("express");
const router = express.Router();
const slack = require("../commons/slack");
const moment = require("moment");

// 테스트
router.get("/", (req, res) => {
    return res.status(200).send(process.env.NODE_ENV + " : working! 06-14");
})

// slack 테스트
router.get("/test/error", async (req, res) => {
    await slack.slackMessage("#ff0000", "slack test", "slack test", moment().unix());
    return res.status(500).send({
        statusCode: 500,
        message: "서버 에러!",
    });
});

module.exports = router;