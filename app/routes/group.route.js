const authJwt = require("../middleware/verify-jwt-token.middleware");
const JWT_SECRET = process.env.JWT_SECRET;
const express = require("express");
const router = express.Router();
const { body, query, param } = require("express-validator");

// Controller
const groupController = require("../controllers/group.controller");
const groupMemberController = require("../controllers/group-member.controller");

/**
 * [그룹]
 */

// 그룹 추가
router.post(
  "/",
  [
    authJwt.verifyToken(JWT_SECRET),
    body("name").not().isEmpty().isString().isLength({ min: 2, max: 30 }),
  ],
  groupController.addGroup
);

// 그룹 리스트
router.get(
  "/",
  [
    authJwt.verifyToken(JWT_SECRET),
    query("page").not().isEmpty().isInt(),
    query("size").not().isEmpty().isInt(),
  ],
  groupController.getGroups
);

// 그룹 수정
router.patch(
  "/:id",
  [
    authJwt.verifyToken(JWT_SECRET),
    param("id").not().isEmpty().isInt(),
    body("name").not().isEmpty().isString().isLength({ min: 2, max: 30 }),
  ],
  groupController.updateGroup
);

// 그룹 삭제
router.delete(
  "/:id",
  [
    authJwt.verifyToken(JWT_SECRET),
    param("id").not().isEmpty().isInt(),
  ],
  groupController.deleteGroup
);

// 그룹명 리스트
router.get("/names", [authJwt.verifyToken(JWT_SECRET)], groupController.getGroupNames);

/**
 * [그룹 멤버]
 */

// 그룹에 멤버 추가
router.post("/:groupId/members/:memberId", [authJwt.verifyToken(JWT_SECRET)], groupMemberController.addMemberToGroup);

// 그룹별 멤버 리스트
router.get("/:groupId/members", [authJwt.verifyToken(JWT_SECRET)], groupMemberController.getGroupMemberList);

// 그룹별 멤버 제거
router.delete("/:groupId/members/:memberId", [authJwt.verifyToken(JWT_SECRET)], groupMemberController.removeMemberFromGroup);

module.exports = router;