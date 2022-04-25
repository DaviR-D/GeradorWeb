import { Question } from "../infra/typeorm/entities/Question";

interface ICreateQuestionDTO {
  name: string;
  description: string;
  alternatives: string;
  answer: string;
  score: number;
  template: number;
  questionImages?: Question[];
  activity_id: string;
}

export { ICreateQuestionDTO };
