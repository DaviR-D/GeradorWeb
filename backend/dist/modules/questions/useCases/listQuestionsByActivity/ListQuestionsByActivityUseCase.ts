import { inject, injectable } from "tsyringe";

import { Question } from "@modules/questions/infra/typeorm/entities/Question";
import { IQuestionsRepository } from "@modules/questions/repositories/IQuestionsRepository";

@injectable()
class ListQuestionsByActivityUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepositories: IQuestionsRepository
  ) {}

  async execute(activity_id: string): Promise<Question[]> {
    const questions = await this.questionsRepositories.findQuestionsByActivity(
      activity_id
    );

    return questions;
  }
}

export { ListQuestionsByActivityUseCase };
