import { UserAchievements } from "../infra/typeorm/entities/UserAchievements";

interface IGetAchievementDTO {
  achievement_id: string;
  user_id: string;
}

export { IGetAchievementDTO };
