"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentsRepositoryInMemory = void 0;

var _Student = require("../../infra/typeorm/entities/Student");

class StudentsRepositoryInMemory {
  constructor() {
    this.students = [];
  }

  async create({
    username,
    password,
    teacher_id
  }) {
    const student = new _Student.Student();
    Object.assign(student, {
      username,
      password,
      teacher_id
    });
    this.students.push(student);
  }

  async findByUsername(username) {
    return this.students.find(student => student.username === username);
  }
  /*
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  } */


}

exports.StudentsRepositoryInMemory = StudentsRepositoryInMemory;