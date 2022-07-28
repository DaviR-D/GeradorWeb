import { Request } from "express";
import { inject, injectable } from "tsyringe";

import { IActivitysRepository } from "@modules/activity/repositories/IActivitysRepository";
import { ICreateQuestionDTO } from "@modules/questions/dtos/ICreateQuestionDTO";
import { IQuestionsRepository } from "@modules/questions/repositories/IQuestionsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateQuestionUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepositories: IQuestionsRepository,
    @inject("ActivitysRepository")
    private activitysRepositories: IActivitysRepository
  ) {}

  async execute(
    {
      name,
      description,
      alternatives,
      answer,
      score,
      template,
      questionImages,
      activity_id,
    }: ICreateQuestionDTO | any, // Bug INESPLICAVEL
    id: string
  ): Promise<void> {
    const activity = await this.activitysRepositories.findAcitvityById(
      activity_id
    );

    const user = activity.user_id;

    if (user !== id) {
      throw new AppError("Usuário logado diferente");
    }

    await this.questionsRepositories.create({
      name,
      description,
      alternatives,
      answer,
      score,
      template,
      questionImages,
      activity_id,
    });
  }
}

export { CreateQuestionUseCase };
