import { inject, injectable } from "tsyringe";

import { IGetAchievementDTO } from "@modules/userAchievements/dtos/IGetAchievementDTO";
import { IUserAchievementsRepository } from "@modules/userAchievements/repositories/IUserAchievementsRepository";

@injectable()
class GetAchievementUseCase {
  constructor(
    @inject("UserAchievementsRepository")
    private userAchievementsRepositories: IUserAchievementsRepository
  ) {}

  async execute(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { achievement_id, user_id }: IGetAchievementDTO | any // Bug INESPLICAVEL
  ): Promise<void> {
    await this.userAchievementsRepositories.getAchievement({
      achievement_id,
      user_id,
    });
  }
}

export { GetAchievementUseCase };
