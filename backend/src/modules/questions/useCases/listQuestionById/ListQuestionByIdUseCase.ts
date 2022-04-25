import { inject, injectable } from "tsyringe";

import { Question } from "@modules/questions/infra/typeorm/entities/Question";
import { IQuestionsRepository } from "@modules/questions/repositories/IQuestionsRepository";

@injectable()
class ListQuestionByIdUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepositories: IQuestionsRepository
  ) {}

  async execute(question_id: string): Promise<Question> {
    const questionById = await this.questionsRepositories.findQuestionById(
      question_id
    );

    return questionById;
  }
}

export { ListQuestionByIdUseCase };
