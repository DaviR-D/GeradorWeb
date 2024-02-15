import { ICreateQuestionDTO } from "../dtos/ICreateQuestionDTO";
import { IUpdateQuestionDTO } from "../dtos/IUpdateQuestionDTO";
import { Question } from "../infra/typeorm/entities/Question";

interface IQuestionsRepository {
  create(data: ICreateQuestionDTO): Promise<Question>;
  update(data: IUpdateQuestionDTO): Promise<Question>;
  delete(id: string): Promise<void>;
  findQuestionById(question_id: string): Promise<Question>;
  findQuestionsByActivity(activity_id: string): Promise<Question[]>;
}

export { IQuestionsRepository };
