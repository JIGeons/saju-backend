const authJwt = require("../middleware/verify-jwt-token.middleware");
const JWT_SECRET = process.env.JWT_SECRET;
const express = require("express");
const router = express.Router();

// Controller
const manseController = require("../controllers/manse.controller");

// 만세력 계산
router.get(
  "/members/:memberId/fortune/:bigNum?/:smallNum?",
  [authJwt.verifyToken(JWT_SECRET)],
  manseController.calculate
);

module.exports = router;