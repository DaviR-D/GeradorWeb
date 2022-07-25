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
    score,
    template,
    questionImages,
    activity_id,
  }: ICreateQuestionDTO): Promise<Question> {
    const question = this.repository.create({
      name,
      description,
      alternatives,
      answer,
      score,
      template,
      questionImages,
      activity_id,
    });

    await this.repository.save(question);

    return question;
  }

  async findQuestionById(question_id: string): Promise<Question> {
    const question = await this.repository.findOne(question_id, {
      relations: ["questionImages"],
    });

    return question;
  }

  async findQuestionsByActivity(activity_id: string): Promise<Question[]> {
    const questions = await this.repository.find({
      where: { activity_id },
      relations: ["questionImages"],
    });

    return questions;
  }
}

export { QuestionsRepository };
