import { Question } from "../infra/typeorm/entities/Question";

interface IUpdateQuestionDTO {
  name: string;
  description: string;
  alternatives: string;
  answer: string;
  score: number;
  template: number;
  questionImages?: Question[];
  question_id: string;
}

export { IUpdateQuestionDTO };
