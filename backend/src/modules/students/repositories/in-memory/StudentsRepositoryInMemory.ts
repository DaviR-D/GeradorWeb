import { ICreateStudentDTO } from "@modules/students/dtos/ICreateStudentDTO";
import { Student } from "@modules/students/infra/typeorm/entities/Student";

import { IStudentsRepository } from "../IStudentsRepository";

class StudentsRepositoryInMemory implements IStudentsRepository {
  students: Student[] = [];

  async create({
    username,
    password,
    teacher_id,
  }: ICreateStudentDTO): Promise<void> {
    const student = new Student();

    Object.assign(student, {
      username,
      password,
      teacher_id,
    });

    this.students.push(student);
  }

  async findByUsername(username: string): Promise<Student> {
    return this.students.find((student) => student.username === username);
  }

  /*
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  } */
}

export { StudentsRepositoryInMemory };
