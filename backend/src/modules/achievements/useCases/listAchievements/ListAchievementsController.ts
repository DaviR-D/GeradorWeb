import { Request, Response } from "express";
import { container } from "tsyringe";

import AchievementView from "@modules/achievements/View/AchievementView";

import { ListAchievementsUseCase } from "./ListAchievementsUseCase";

class ListAchievementsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAchievementByIdUseCase = container.resolve(
      ListAchievementsUseCase
    );

    const achievement = await listAchievementByIdUseCase.execute();

    return response.json(AchievementView.renderMany(achievement));
  }
}

export { ListAchievementsController };
