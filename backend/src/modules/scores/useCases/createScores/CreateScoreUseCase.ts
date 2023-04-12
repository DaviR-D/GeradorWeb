import { Request } from "express";
import { inject, injectable } from "tsyringe";

import { IActivitysRepository } from "@modules/activity/repositories/IActivitysRepository";
import { ICreateScoreDTO } from "@modules/scores/dtos/ICreateScoreDTO";
import { IScoresRepository } from "@modules/scores/repositories/IScoresRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateScoreUseCase {
  constructor(
    @inject("ScoresRepository")
    private scoresRepositories: IScoresRepository,
    @inject("ActivitysRepository")
    private activitysRepositories: IActivitysRepository
  ) {}

  async execute(
    { score, user_id, activity_id }: ICreateScoreDTO | any, // Bug INESPLICAVEL
    id: string
  ): Promise<void> {
    const activity = await this.activitysRepositories.findAcitvityById(
      activity_id
    );

    const user = activity.user_id;

    if (user !== id) {
      throw new AppError("Usuário logado diferente");
    }

    await this.scoresRepositories.create({
      score,
      user_id,
      activity_id,
    });
  }
}

export { CreateScoreUseCase };
