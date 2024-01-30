import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAchievementUseCase } from "./GetAchievementUseCase";

class GetAchievementController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { achievement_id } = request.body;

    const { id } = request.user;
    const user_id = id;

    const getAchievementUseCase = container.resolve(GetAchievementUseCase);

    await getAchievementUseCase.execute({
      achievement_id,
      user_id,
    });

    return response.status(201).send();
  }
}

export { GetAchievementController };
