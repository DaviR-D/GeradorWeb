"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _activitys = require("./activitys.routes");

var _authenticate = require("./authenticate.routes");

var _authenticateStudents = require("./authenticateStudents.routes");

var _password = require("./password.routes");

var _questions = require("./questions.routes");

var _students = require("./students.routes");

var _users = require("./users.routes");

const router = (0, _express.Router)();
exports.router = router;
router.use("/users", _users.usersRoutes);
router.use("/students", _students.studentsRoutes);
router.use("/password", _password.passwordRoutes);
router.use("/activitys", _activitys.activitysRoutes);
router.use("/questions", _questions.questionsRoutes);
router.use("/students", _authenticateStudents.authenticateStudentRoutes);
router.use(_authenticate.authenticateRoutes);