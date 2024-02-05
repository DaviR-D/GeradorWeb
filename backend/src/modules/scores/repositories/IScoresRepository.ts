import { ICreateScoreDTO } from "../dtos/ICreateScoreDTO";
import { Score } from "../infra/typeorm/entities/Score";

interface IScoresRepository {
  create(data: ICreateScoreDTO): Promise<Score>;
  findScoreById(score_id: string): Promise<Score>;
  findScoresByActivity(activity_id: string): Promise<Score[]>;
  findGroupedScores(user_id: string): Promise<Score[]>;
}

export { IScoresRepository };
