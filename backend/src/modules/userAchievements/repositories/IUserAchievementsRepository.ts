import { Achievement } from "@modules/achievements/infra/typeorm/entities/Achievement";
import { UserAchievements } from "@modules/userAchievements/infra/typeorm/entities/UserAchievements";

import { IGetAchievementDTO } from "../dtos/IGetAchievementDTO";

interface IUserAchievementsRepository {
  getAchievement(data: IGetAchievementDTO): Promise<UserAchievements>;
  findAchievementsByUser(user_id: string): Promise<Achievement[]>;
}

export { IUserAchievementsRepository };
