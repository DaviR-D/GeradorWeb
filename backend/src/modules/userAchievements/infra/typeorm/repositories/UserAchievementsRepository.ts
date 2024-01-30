import { getRepository, Repository, In } from "typeorm";

import { Achievement } from "@modules/achievements/infra/typeorm/entities/Achievement";
import { IGetAchievementDTO } from "@modules/userAchievements/dtos/IGetAchievementDTO";
import { UserAchievements } from "@modules/userAchievements/infra/typeorm/entities/UserAchievements";
import { IUserAchievementsRepository } from "@modules/userAchievements/repositories/IUserAchievementsRepository";

class UserAchievementsRepository implements IUserAchievementsRepository {
  private repository: Repository<UserAchievements>;
  private achievementsRepository: Repository<Achievement>;

  constructor() {
    this.repository = getRepository(UserAchievements);
    this.achievementsRepository = getRepository(Achievement);
  }

  async getAchievement({
    achievement_id,
    user_id,
  }: IGetAchievementDTO): Promise<UserAchievements> {
    const user_achievement = this.repository.create({
      achievement_id,
      user_id,
    });

    await this.repository.save(user_achievement);

    return user_achievement;
  }

  async findAchievementsByUser(user_id: string): Promise<Achievement[]> {
    // Buscar entradas UserAchievements associadas ao user_id
    const userAchievements = await this.repository.find({
      where: { user_id },
    });

    // Extrair os achievement_id das entradas UserAchievements
    const achievementIds = userAchievements.map(
      (userAchievement) => userAchievement.achievement_id
    );

    // Buscar os itens correspondentes na tabela de itens
    const achievements = await this.achievementsRepository.find({
      where: { id: In(achievementIds) },
    });

    return achievements;
  }
}

export { UserAchievementsRepository };
