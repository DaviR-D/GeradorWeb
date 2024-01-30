import { inject, injectable } from "tsyringe";

import { Achievement } from "@modules/achievements/infra/typeorm/entities/Achievement";
import { UserAchievements } from "@modules/userAchievements/infra/typeorm/entities/UserAchievements";
import { IUserAchievementsRepository } from "@modules/userAchievements/repositories/IUserAchievementsRepository";

@injectable()
class ListAchievementsByIdUseCase {
  constructor(
    @inject("UserAchievementsRepository")
    private userAchievementsRepositories: IUserAchievementsRepository
  ) {}

  async execute(user_id: string): Promise<Achievement[]> {
    const userAchievementById =
      await this.userAchievementsRepositories.findAchievementsByUser(user_id);

    return userAchievementById;
  }
}

export { ListAchievementsByIdUseCase };
