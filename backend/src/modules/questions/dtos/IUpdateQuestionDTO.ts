import { Question } from "../infra/typeorm/entities/Question";
import { QuestionImage } from "../infra/typeorm/entities/QuestionImages";

interface IUpdateQuestionDTO {
  name: string;
  description: string;
  alternatives: string;
  answer: string;
  score: number;
  template: number;
  questionImages?: QuestionImage[];
  question_id: string;
}

export { IUpdateQuestionDTO };
