import { ICreateQuestionDTO } from "../dtos/ICreateQuestionDTO";
import { Question } from "../infra/typeorm/entities/Question";

interface IQuestionsRepository {
  create(data: ICreateQuestionDTO): Promise<Question>;
}

export { IQuestionsRepository };
