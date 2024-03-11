import { getRepository, Repository } from "typeorm";

import { ICreateQuestionDTO } from "@modules/questions/dtos/ICreateQuestionDTO";
import { IUpdateQuestionDTO } from "@modules/questions/dtos/IUpdateQuestionDTO";
import { QuestionImage } from "@modules/questions/infra/typeorm/entities/QuestionImages";
import { IQuestionsRepository } from "@modules/questions/repositories/IQuestionsRepository";

import { Question } from "../entities/Question";

class QuestionsRepository implements IQuestionsRepository {
  private repository: Repository<Question>;
  private imagesRepository: Repository<QuestionImage>;

  constructor() {
    this.repository = getRepository(Question);
    this.imagesRepository = getRepository(QuestionImage);
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

  async update({
    name,
    description,
    alternatives,
    answer,
    score,
    template,
    questionImages,
    question_id,
  }: IUpdateQuestionDTO): Promise<Question> {
    const question = await this.repository.findOne(question_id, {
      relations: ["questionImages"],
    });

    question.name = name;
    question.description = description;
    question.alternatives = alternatives;
    question.answer = answer;
    question.score = score;
    question.template = template;

    await this.repository.save(question);

    await this.imagesRepository
      .createQueryBuilder("questionImages")
      .delete()
      .from(QuestionImage)
      .where("question_id = :id", { id: question_id })
      .execute();

    const images = questionImages.map((img) =>
      this.imagesRepository.create({
        path: img.path,
        question,
      })
    );

    await this.imagesRepository.save(images);

    return question;
  }

  async delete(id: string): Promise<void> {
    await getRepository(QuestionImage)
      .createQueryBuilder("questionImages")
      .delete()
      .from(QuestionImage)
      .where("question_id = :id", { id })
      .execute();

    this.repository
      .createQueryBuilder("questions")
      .delete()
      .from(Question)
      .where("id = :id", { id })
      .execute();
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
