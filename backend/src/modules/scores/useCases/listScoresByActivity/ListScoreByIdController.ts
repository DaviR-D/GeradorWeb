import { Request, Response } from "express";
import { container } from "tsyringe";

import ScoreView from "@modules/scores/View/ScoreView";

import { ListScoresByActivityUseCase } from "./ListScoresByActivityUseCase";

class ListScoresByActivityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { activity_id } = request.params;

    const listScoreByActivityUseCase = container.resolve(
      ListScoresByActivityUseCase
    );

    const scores = await listScoreByActivityUseCase.execute(activity_id);

    return response.json(ScoreView.renderMany(scores));
  }
}

export { ListScoresByActivityController };
