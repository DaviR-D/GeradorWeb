import { Request, Response } from "express";
import { container } from "tsyringe";

// import ScoreView from "@modules/scores/View/ScoreView";

import { ListGroupedScoresUseCase } from "./ListGroupedScoresUseCase";

class ListGroupedScoresController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listGroupedScoreUseCase = container.resolve(ListGroupedScoresUseCase);
    const { id } = request.user;
    const user_id = id;

    const scores = await listGroupedScoreUseCase.execute(user_id);

    return response.json(scores);
  }
}

export { ListGroupedScoresController };
