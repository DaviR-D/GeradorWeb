"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.studentsRoutes = void 0;

var _express = require("express");

var _CreateStudentController = require("../../../../modules/students/useCases/createStudent/CreateStudentController");

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const studentsRoutes = (0, _express.Router)();
exports.studentsRoutes = studentsRoutes;
const createStudentController = new _CreateStudentController.CreateStudentController();
studentsRoutes.post("/", _ensureAuthenticated.ensureAuthenticated, createStudentController.handle);