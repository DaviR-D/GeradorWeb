import { Response } from "express";
import { getRepository } from "typeorm";

import { Question } from "@modules/questions/infra/typeorm/entities/Question";
import { QuestionImage } from "@modules/questions/infra/typeorm/entities/QuestionImages";

class DeleteQuestionsByActivityController {
  async handle(activity_id: string, response: Response): Promise<Response> {
    const questions = await getRepository(Question)
      .createQueryBuilder("quest")
      .select("quest.id")
      .from(Question, "questions")
      .where("quest.activity_id = :id", { id: activity_id })
      .execute();

    const question_ids = [];

    questions.forEach((question) => {
      question_ids.push(question.id);
    });

    await getRepository(QuestionImage)
      .createQueryBuilder("questionImages")
      .delete()
      .from(QuestionImage)
      .where("question_id IN (:...arr)", { arr: question_ids })
      .execute();

    await getRepository(Question)
      .createQueryBuilder("questions")
      .delete()
      .from(Question)
      .where("activity_id = :id", { id: activity_id })
      .execute();

    return response;
  }
}

export { DeleteQuestionsByActivityController };
