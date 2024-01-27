import { getRepository, Repository } from "typeorm";

import { IAchievementsRepository } from "@modules/achievements/repositories/IAchievementsRepository";

import { Achievement } from "../entities/Achievement";

class AchievementsRepository implements IAchievementsRepository {
  private repository: Repository<Achievement>;

  constructor() {
    this.repository = getRepository(Achievement);
  }

  async findAchievementById(achievement_id: string): Promise<Achievement> {
    const achievement = await this.repository.findOne(achievement_id);

    return achievement;
  }

  async findAllAchievements(): Promise<Achievement[]> {
    const achievements = await this.repository.find();

    return achievements;
  }
}

export { AchievementsRepository };
