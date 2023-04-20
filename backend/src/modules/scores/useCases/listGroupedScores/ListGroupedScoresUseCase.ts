import { inject, injectable } from "tsyringe";

import { Score } from "@modules/scores/infra/typeorm/entities/Score";
import { IScoresRepository } from "@modules/scores/repositories/IScoresRepository";

@injectable()
class ListGroupedScoresUseCase {
  constructor(
    @inject("ScoresRepository")
    private scoresRepositories: IScoresRepository
  ) {}

  async execute(): Promise<Score[]> {
    const scores = await this.scoresRepositories.findGroupedScores();

    return scores;
  }
}

export { ListGroupedScoresUseCase };
