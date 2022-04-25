import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListActivityByUserUseCase } from "./ListActivityByUserUseCase";

class ListActivityByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listActivityByUserUseCase = container.resolve(
      ListActivityByUserUseCase
    );

    const activitys = await listActivityByUserUseCase.execute(id);

    return response.json(activitys);
  }
}

export { ListActivityByUserController };
