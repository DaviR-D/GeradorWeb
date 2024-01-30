import { UserAchievements } from "../infra/typeorm/entities/UserAchievements";

interface IGetAchievementDTO {
  user_id: string;
  achievement_id: string;
}

export { IGetAchievementDTO };
