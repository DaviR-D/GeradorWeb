import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "@config/auth";
import { IStudentsRepository } from "@modules/students/repositories/IStudentsRepository";
import { IStudentsTokensRepository } from "@modules/students/repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  student: {
    username: string;
  };
  token: string;
  refresh_token: string;
}

@injectable()
class AuthenticateStudentUseCase {
  constructor(
    @inject("StudentsRepository")
    private studentsRepository: IStudentsRepository,

    @inject("StudentsTokensRepository")
    private studentsTokensRepository: IStudentsTokensRepository,

    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const student = await this.studentsRepository.findByUsername(username);
    const {
      expires_in_token,
      secret_refresh_token,
      secret_token,
      expires_in_refresh_token,
      expires_refresh_token_days,
    } = auth;

    if (!student) {
      throw new AppError("Username or password incorrect");
    }

    const passwordMatch = await compare(password, student.password);

    if (!passwordMatch) {
      throw new AppError("Username or password incorrect");
    }

    const token = sign({}, secret_token, {
      subject: student.id,
      expiresIn: expires_in_token,
    });

    const refresh_token = sign({ username }, secret_refresh_token, {
      subject: student.id,
      expiresIn: expires_in_refresh_token,
    });

    const refresh_token_expires_date = this.dateProvider.addDays(
      expires_refresh_token_days
    );

    await this.studentsTokensRepository.create({
      student_id: student.id,
      refresh_token,
      expires_date: refresh_token_expires_date,
    });

    const tokenReturn: IResponse = {
      token,
      student: {
        username: student.username,
      },
      refresh_token,
    };

    return tokenReturn;
  }
}

export { AuthenticateStudentUseCase };
