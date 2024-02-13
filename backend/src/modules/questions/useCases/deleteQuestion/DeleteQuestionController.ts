import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteQuestionUseCase } from "./DeleteQuestionUseCase";

class DeleteQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteQuestionUseCase = container.resolve(DeleteQuestionUseCase);

    await deleteQuestionUseCase.execute(id);

    return response;
  }
}

export { DeleteQuestionController };
