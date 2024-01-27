import { inject, injectable } from "tsyringe";

import { Achievement } from "@modules/achievements/infra/typeorm/entities/Achievement";
import { IAchievementsRepository } from "@modules/achievements/repositories/IAchievementsRepository";

@injectable()
class ListAchievementsUseCase {
  constructor(
    @inject("AchievementsRepository")
    private achievementsRepositories: IAchievementsRepository
  ) {}

  async execute(): Promise<Achievement[]> {
    const achievements =
      await this.achievementsRepositories.findAllAchievements();

    return achievements;
  }
}

export { ListAchievementsUseCase };
