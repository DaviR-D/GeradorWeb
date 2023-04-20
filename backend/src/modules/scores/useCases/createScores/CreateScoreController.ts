import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateScoreUseCase } from "./CreateScoreUseCase";

class CreateScoreController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { activity_id } = request.params;
    const { score } = request.body;

    // const { score } = request.body;

    const { id } = request.user;
    const user_id = id;

    const createScoreUseCase = container.resolve(CreateScoreUseCase);

    await createScoreUseCase.execute(
      {
        score,
        user_id,
        activity_id,
      },
      id
    );

    return response.status(201).send();
  }
}

export { CreateScoreController };
