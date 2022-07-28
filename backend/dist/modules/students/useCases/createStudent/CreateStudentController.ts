import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateStudentUseCase } from "./CreateUserUseCase";

class CreateStudentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const { id } = request.user;

    const createStudentUseCase = container.resolve(CreateStudentUseCase);

    await createStudentUseCase.execute({
      username,
      password,
      teacher_id: id,
    });

    return response.status(201).send();
  }
}

export { CreateStudentController };
