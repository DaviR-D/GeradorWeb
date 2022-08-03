"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateStudentUseCase = void 0;

var _bcryptjs = require("bcryptjs");

var _tsyringe = require("tsyringe");

var _IStudentsRepository = require("../../repositories/IStudentsRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateStudentUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("StudentsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IStudentsRepository.IStudentsRepository === "undefined" ? Object : _IStudentsRepository.IStudentsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateStudentUseCase {
  constructor(studentsRepository) {
    this.studentsRepository = studentsRepository;
  }

  async execute({
    username,
    password,
    teacher_id
  }) {
    /* const studentAlreadyExists = await this.studentsRepository.findByEmail(email);
     if (userAlreadyExists) {
      throw new AppError("User already exists");
    } */
    const passwordHash = await (0, _bcryptjs.hash)(password, 8);
    await this.studentsRepository.create({
      username,
      password: passwordHash,
      teacher_id
    });
  }

}) || _class) || _class) || _class) || _class);
exports.CreateStudentUseCase = CreateStudentUseCase;