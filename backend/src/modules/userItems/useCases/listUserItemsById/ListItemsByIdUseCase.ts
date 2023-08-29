import { inject, injectable } from "tsyringe";

import { Score } from "@modules/scores/infra/typeorm/entities/Score";
import { IScoresRepository } from "@modules/scores/repositories/IScoresRepository";

@injectable()
class ListScoreByIdUseCase {
  constructor(
    @inject("ScoresRepository")
    private scoresRepositories: IScoresRepository
  ) {}

  async execute(score_id: string): Promise<Score> {
    const scoreById = await this.scoresRepositories.findScoreById(score_id);

    return scoreById;
  }
}

export { ListScoreByIdUseCase };
