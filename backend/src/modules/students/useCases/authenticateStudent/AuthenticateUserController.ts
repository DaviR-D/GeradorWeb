import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateStudentUseCase } from "./AuthenticateUserUseCase";

class AuthenticateStudentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, username } = request.body;

    const authenticateStudentUseCase = container.resolve(
      AuthenticateStudentUseCase
    );

    const token = await authenticateStudentUseCase.execute({
      password,
      username,
    });

    return response.json(token);
  }
}

export { AuthenticateStudentController };
