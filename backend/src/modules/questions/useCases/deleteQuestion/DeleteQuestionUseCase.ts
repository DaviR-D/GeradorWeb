import { inject, injectable } from "tsyringe";

import { Question } from "@modules/questions/infra/typeorm/entities/Question";
import { IQuestionsRepository } from "@modules/questions/repositories/IQuestionsRepository";

@injectable()
class DeleteQuestionUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepositories: IQuestionsRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.questionsRepositories.delete(id);
  }
}

export { DeleteQuestionUseCase };
