import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateStudentDTO } from "@modules/students/dtos/ICreateStudentDTO";
import { IStudentsRepository } from "@modules/students/repositories/IStudentsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateStudentUseCase {
  constructor(
    @inject("StudentsRepository")
    private studentsRepository: IStudentsRepository
  ) {}

  async execute({
    username,
    password,
    teacher_id,
  }: ICreateStudentDTO): Promise<void> {
    /* const studentAlreadyExists = await this.studentsRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    } */

    const passwordHash = await hash(password, 8);

    await this.studentsRepository.create({
      username,
      password: passwordHash,
      teacher_id,
    });
  }
}

export { CreateStudentUseCase };
