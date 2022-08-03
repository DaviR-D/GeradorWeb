"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateStudentController = void 0;

var _tsyringe = require("tsyringe");

var _AuthenticateUserUseCase = require("./AuthenticateUserUseCase");

class AuthenticateStudentController {
  async handle(request, response) {
    const {
      password,
      username
    } = request.body;

    const authenticateStudentUseCase = _tsyringe.container.resolve(_AuthenticateUserUseCase.AuthenticateStudentUseCase);

    const token = await authenticateStudentUseCase.execute({
      password,
      username
    });
    return response.json(token);
  }

}

exports.AuthenticateStudentController = AuthenticateStudentController;