"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateStudentController = void 0;

var _tsyringe = require("tsyringe");

var _CreateUserUseCase = require("./CreateUserUseCase");

class CreateStudentController {
  async handle(request, response) {
    const {
      username,
      password
    } = request.body;
    const {
      id
    } = request.user;

    const createStudentUseCase = _tsyringe.container.resolve(_CreateUserUseCase.CreateStudentUseCase);

    await createStudentUseCase.execute({
      username,
      password,
      teacher_id: id
    });
    return response.status(201).send();
  }

}

exports.CreateStudentController = CreateStudentController;