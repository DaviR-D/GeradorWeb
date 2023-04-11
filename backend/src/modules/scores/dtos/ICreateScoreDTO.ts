import { Score } from "../infra/typeorm/entities/Score";

interface ICreateScoreDTO {
  score: number;
  activity_id: string;
  user_id: string;
}

export { ICreateScoreDTO };
