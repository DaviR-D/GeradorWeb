import { getRepository, Repository } from "typeorm";

import { ICreateStudentTokenDTO } from "@modules/students/dtos/ICreateStudentTokenDTO";
import { IStudentsTokensRepository } from "@modules/students/repositories/IUsersTokensRepository";

import { StudentTokens } from "../entities/StudentTokens";

class StudentsTokensRepository implements IStudentsTokensRepository {
  private repository: Repository<StudentTokens>;

  constructor() {
    this.repository = getRepository(StudentTokens);
  }

  async create({
    expires_date,
    refresh_token,
    student_id,
  }: ICreateStudentTokenDTO): Promise<StudentTokens> {
    const studentToken = this.repository.create({
      expires_date,
      refresh_token,
      student_id,
    });

    await this.repository.save(studentToken);

    return studentToken;
  }

  async findByStudentIdAndRefreshToken(
    student_id: string,
    refresh_token: string
  ): Promise<StudentTokens> {
    const studentsTokens = await this.repository.findOne({
      student_id,
      refresh_token,
    });

    return studentsTokens;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findByRefreshToken(refresh_token: string): Promise<StudentTokens> {
    const studentToken = await this.repository.findOne({ refresh_token });

    return studentToken;
  }
}

export { StudentsTokensRepository };
