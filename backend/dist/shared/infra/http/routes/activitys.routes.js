"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activitysRoutes = void 0;

var _express = require("express");

var _CreateActivityController = require("../../../../modules/activity/useCases/createActivity/CreateActivityController");

var _ListActivityByUserController = require("../../../../modules/activity/useCases/listActivitysByUser/ListActivityByUserController");

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

var _ensureTeacher = require("../middlewares/ensureTeacher");

const activitysRoutes = (0, _express.Router)();
exports.activitysRoutes = activitysRoutes;
const createActivityController = new _CreateActivityController.CreateActivityController();
const listActivityByUserController = new _ListActivityByUserController.ListActivityByUserController();
activitysRoutes.post("/", _ensureAuthenticated.ensureAuthenticated, _ensureTeacher.ensureTeacher, createActivityController.handle);
activitysRoutes.get("/", _ensureAuthenticated.ensureAuthenticated, _ensureTeacher.ensureTeacher, listActivityByUserController.handle);