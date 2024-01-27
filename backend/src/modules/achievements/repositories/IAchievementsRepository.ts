import { Achievement } from "../infra/typeorm/entities/Achievement";

interface IAchievementsRepository {
  findAchievementById(score_id: string): Promise<Achievement>;
  findAllAchievements(): Promise<Achievement[]>;
}

export { IAchievementsRepository };
