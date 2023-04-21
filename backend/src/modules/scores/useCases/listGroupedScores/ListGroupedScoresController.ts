import { Request, Response } from "express";
import { container } from "tsyringe";

// import ScoreView from "@modules/scores/View/ScoreView";

import { ListGroupedScoresUseCase } from "./ListGroupedScoresUseCase";

class ListGroupedScoresController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listGroupedScoreUseCase = container.resolve(ListGroupedScoresUseCase);

    const scores = await listGroupedScoreUseCase.execute();

    return response.json(scores);
  }
}

export { ListGroupedScoresController };
