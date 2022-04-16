import { getRepository, Repository } from "typeorm";

import { ICreateQuestionDTO } from "@modules/questions/dtos/ICreateQuestionDTO";
import { IQuestionsRepository } from "@modules/questions/repositories/IQuestionsRepository";

import { Question } from "../entities/Question";

class QuestionsRepository implements IQuestionsRepository {
  private repository: Repository<Question>;

  constructor() {
    this.repository = getRepository(Question);
  }

  async create({
    name,
    description,
    alternatives,
    answer,
    template,
    activity_id,
  }: ICreateQuestionDTO): Promise<Question> {
    const question = this.repository.create({
      name,
      description,
      alternatives,
      answer,
      template,
      activity_id,
    });

    await this.repository.save(question);

    return question;
  }
}

export { QuestionsRepository };
