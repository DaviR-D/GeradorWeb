import { ICreateQuestionDTO } from "../dtos/ICreateQuestionDTO";
import { Question } from "../infra/typeorm/entities/Question";

interface IQuestionsRepository {
  create(data: ICreateQuestionDTO): Promise<Question>;
  findQuestionById(question_id: string): Promise<Question>;
  findQuestionsByActivity(activity_id: string): Promise<Question[]>;
}

export { IQuestionsRepository };
