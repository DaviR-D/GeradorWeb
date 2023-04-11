import { Request, Response } from "express";
import { container } from "tsyringe";

import ScoreView from "@modules/scores/View/ScoreView";

import { ListScoreByIdUseCase } from "./ListScoreByIdUseCase";

class ListScoreByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { score_id } = request.params;

    const listScoreByIdUseCase = container.resolve(ListScoreByIdUseCase);

    const score = await listScoreByIdUseCase.execute(score_id);

    return response.json(ScoreView.render(score));
  }
}

export { ListScoreByIdController };
