"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questionsRoutes = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../../../../config/upload"));

var _CreateQuestionController = require("../../../../modules/questions/useCases/createQuestions/CreateQuestionController");

var _ListQuestionByIdController = require("../../../../modules/questions/useCases/listQuestionById/ListQuestionByIdController");

var _ListQuestionByIdController2 = require("../../../../modules/questions/useCases/listQuestionsByActivity/ListQuestionByIdController");

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

var _ensureTeacher = require("../middlewares/ensureTeacher");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const questionsRoutes = (0, _express.Router)();
exports.questionsRoutes = questionsRoutes;
const uploadQuestionImages = (0, _multer.default)(_upload.default.upload("./tmp/questionImages"));
const createQuestionController = new _CreateQuestionController.CreateQuestionController();
const listQuestionByIdController = new _ListQuestionByIdController.ListQuestionByIdController();
const listQuestionByActivityController = new _ListQuestionByIdController2.ListQuestionsByActivityController();
questionsRoutes.post("/:activity_id", _ensureAuthenticated.ensureAuthenticated, _ensureTeacher.ensureTeacher, uploadQuestionImages.array("questionImages"), createQuestionController.handle);
questionsRoutes.get("/:question_id", _ensureAuthenticated.ensureAuthenticated, listQuestionByIdController.handle);
questionsRoutes.get("/questions/:activity_id", listQuestionByActivityController.handle);