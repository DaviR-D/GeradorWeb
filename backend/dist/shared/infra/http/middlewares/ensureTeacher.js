"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureTeacher = ensureTeacher;

var _UsersRepository = require("../../../../modules/accounts/infra/typeorm/repositories/UsersRepository");

var _AppError = require("../../../errors/AppError");

async function ensureTeacher(request, response, next) {
  const {
    id
  } = request.user;
  const usersRepository = new _UsersRepository.UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user.isTeacher) {
    throw new _AppError.AppError("Users isn't teacher!");
  }

  return next();
}