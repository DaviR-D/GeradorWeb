import { Request, Response } from "express";
import { container } from "tsyringe";

import QuestionView from "@modules/questions/View/QuestionView";

import { ListQuestionByIdUseCase } from "./ListQuestionByIdUseCase";

class ListQuestionByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { question_id } = request.params;

    const listQuestionByIdUseCase = container.resolve(ListQuestionByIdUseCase);

    const question = await listQuestionByIdUseCase.execute(question_id);

    return response.json(QuestionView.render(question));
  }
}

export { ListQuestionByIdController };
