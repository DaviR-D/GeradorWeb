import { inject, injectable } from "tsyringe";

import { Score } from "@modules/scores/infra/typeorm/entities/Score";
import { IScoresRepository } from "@modules/scores/repositories/IScoresRepository";

@injectable()
class ListScoresByActivityUseCase {
  constructor(
    @inject("ScoresRepository")
    private scoresRepositories: IScoresRepository
  ) {}

  async execute(activity_id: string): Promise<Score[]> {
    const scores = await this.scoresRepositories.findScoresByActivity(
      activity_id
    );

    return scores;
  }
}

export { ListScoresByActivityUseCase };
