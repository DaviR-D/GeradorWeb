import { getRepository, Repository } from "typeorm";

import { ICreateScoreDTO } from "@modules/scores/dtos/ICreateScoreDTO";
import { IScoresRepository } from "@modules/scores/repositories/IScoresRepository";

import { Score } from "../entities/Score";

class ScoresRepository implements IScoresRepository {
  private repository: Repository<Score>;

  constructor() {
    this.repository = getRepository(Score);
  }

  async create({
    score,
    user_id,
    activity_id,
  }: ICreateScoreDTO): Promise<Score> {
    const score_register = this.repository.create({
      score,
      activity_id,
      user_id,
    });

    await this.repository.save(score_register);

    return score_register;
  }

  async findScoreById(score_id: string): Promise<Score> {
    const score = await this.repository.findOne(score_id, {
      relations: ["scoreImages"],
    });

    return score;
  }

  async findScoresByActivity(activity_id: string): Promise<Score[]> {
    const scores = await this.repository.find({
      where: { activity_id },
      relations: ["scoreImages"],
    });

    return scores;
  }

  async findGroupedScores(): Promise<Score[]> {
    const scores = await this.repository
      .createQueryBuilder("score")
      .leftJoin("score.user", "user")
      .select(["user.name", "SUM(score.score) as totalScore"])
      .groupBy("user.name")
      .orderBy("totalScore", "DESC")
      .getRawMany();

    return scores;
  }
}

export { ScoresRepository };
