"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateStudentRoutes = void 0;

var _express = require("express");

var _RefreshTokenController = require("../../../../modules/accounts/useCases/refreshToken/RefreshTokenController");

var _AuthenticateUserController = require("../../../../modules/students/useCases/authenticateStudent/AuthenticateUserController");

const authenticateStudentRoutes = (0, _express.Router)();
exports.authenticateStudentRoutes = authenticateStudentRoutes;
const authenticateStudentController = new _AuthenticateUserController.AuthenticateStudentController();
const refreshTokenController = new _RefreshTokenController.RefreshTokenController();
authenticateStudentRoutes.post("/sessions", authenticateStudentController.handle);
authenticateStudentRoutes.post("/refresh-token", refreshTokenController.handle);