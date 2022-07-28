import { Request, Response } from "express";
import { container } from "tsyringe";

import QuestionView from "@modules/questions/View/QuestionView";

import { ListQuestionsByActivityUseCase } from "./ListQuestionsByActivityUseCase";

class ListQuestionsByActivityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { activity_id } = request.params;

    const listQuestionByActivityUseCase = container.resolve(
      ListQuestionsByActivityUseCase
    );

    const questions = await listQuestionByActivityUseCase.execute(activity_id);

    return response.json(QuestionView.renderMany(questions));
  }
}

export { ListQuestionsByActivityController };
