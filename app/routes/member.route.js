const authJwt = require("../middleware/verify-jwt-token.middleware");
const JWT_SECRET = process.env.JWT_SECRET;
const express = require("express");
const router = express.Router();
const memberController = require("../controllers/member.controller");

/**
 * [멤버]
 */

// 멤버 추가
router.post("/", [authJwt.verifyToken(JWT_SECRET)], memberController.addMember);

// 멤버 리스트
router.get("/", [authJwt.verifyToken(JWT_SECRET)], memberController.getMembers);

// 멤버 삭제
router.delete("/:id", [authJwt.verifyToken(JWT_SECRET)], memberController.deleteMember);

module.exports = router;