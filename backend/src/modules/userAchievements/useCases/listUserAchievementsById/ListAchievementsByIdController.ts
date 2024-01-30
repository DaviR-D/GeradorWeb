import { Request, Response } from "express";
import { container } from "tsyringe";

import AchievementsView from "@modules/userAchievements/View/UserAchievementsView";

import { ListAchievementsByIdUseCase } from "./ListAchievementsByIdUseCase";

class ListAchievementsByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const user_id = id;

    const listAchievementsByIdUseCase = container.resolve(
      ListAchievementsByIdUseCase
    );

    const achievement = await listAchievementsByIdUseCase.execute(user_id);

    return response.json(AchievementsView.renderMany(achievement));
  }
}

export { ListAchievementsByIdController };
