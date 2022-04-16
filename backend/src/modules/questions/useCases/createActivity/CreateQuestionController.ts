import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateQuestionUseCase } from "./CreateQuestionUseCase";

class CreateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { activity_id } = request.params;

    const { name, description, alternatives, answer, template } = request.body;

    const { id } = request.user;

    const createQuestionUseCase = container.resolve(CreateQuestionUseCase);

    await createQuestionUseCase.execute(
      {
        name,
        description,
        alternatives,
        answer,
        template,
        activity_id,
      },
      id
    );

    return response.status(201).send();
  }
}

export { CreateQuestionController };
