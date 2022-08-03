"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentsTokensRepository = void 0;

var _typeorm = require("typeorm");

var _StudentTokens = require("../entities/StudentTokens");

class StudentsTokensRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_StudentTokens.StudentTokens);
  }

  async create({
    expires_date,
    refresh_token,
    student_id
  }) {
    const studentToken = this.repository.create({
      expires_date,
      refresh_token,
      student_id
    });
    await this.repository.save(studentToken);
    return studentToken;
  }

  async findByStudentIdAndRefreshToken(student_id, refresh_token) {
    const studentsTokens = await this.repository.findOne({
      student_id,
      refresh_token
    });
    return studentsTokens;
  }

  async deleteById(id) {
    await this.repository.delete(id);
  }

  async findByRefreshToken(refresh_token) {
    const studentToken = await this.repository.findOne({
      refresh_token
    });
    return studentToken;
  }

}

exports.StudentsTokensRepository = StudentsTokensRepository;