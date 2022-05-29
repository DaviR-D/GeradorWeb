import { getRepository, Repository } from "typeorm";

import { ICreateStudentDTO } from "@modules/students/dtos/ICreateStudentDTO";
import { IStudentsRepository } from "@modules/students/repositories/IStudentsRepository";

import { Student } from "../entities/Student";

class StudentsRepository implements IStudentsRepository {
  private repository: Repository<Student>;

  constructor() {
    this.repository = getRepository(Student);
  }

  async create({
    username,
    password,
    teacher_id,
  }: ICreateStudentDTO): Promise<void> {
    const student = this.repository.create({
      username,
      password,
      teacher_id,
    });

    await this.repository.save(student);
  }

  /*
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  */
}

export { StudentsRepository };
