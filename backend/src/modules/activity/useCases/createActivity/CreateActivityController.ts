import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAcitvityUseCase } from "./CreateActivityUseCase";

class CreateActivityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { name } = request.body;

    const createActivityUseCase = container.resolve(CreateAcitvityUseCase);

    const activity = await createActivityUseCase.execute({
      name,
      user_id: id,
    });

    return response.status(201).json(activity);
  }
}

export { CreateActivityController };
