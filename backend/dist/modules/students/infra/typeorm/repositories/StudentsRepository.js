"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentsRepository = void 0;

var _typeorm = require("typeorm");

var _Student = require("../entities/Student");

class StudentsRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Student.Student);
  }

  async create({
    username,
    password,
    teacher_id
  }) {
    const student = this.repository.create({
      username,
      password,
      teacher_id
    });
    await this.repository.save(student);
  }

  async findByUsername(username) {
    const student = await this.repository.findOne({
      username
    });
    return student;
  }
  /*
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
   */


}

exports.StudentsRepository = StudentsRepository;