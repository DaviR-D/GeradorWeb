import { inject, injectable } from "tsyringe";

import { IActivitysRepository } from "@modules/activity/repositories/IActivitysRepository";
import { ICreateScoreDTO } from "@modules/scores/dtos/ICreateScoreDTO";
import { IScoresRepository } from "@modules/scores/repositories/IScoresRepository";

@injectable()
class CreateScoreUseCase {
  constructor(
    @inject("ScoresRepository")
    private scoresRepositories: IScoresRepository,
    @inject("ActivitysRepository")
    private activitysRepositories: IActivitysRepository
  ) {}

  async execute(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { score, user_id, activity_id }: ICreateScoreDTO | any // Bug INESPLICAVEL
  ): Promise<void> {
    await this.scoresRepositories.create({
      score,
      user_id,
      activity_id,
    });
  }
}

export { CreateScoreUseCase };
