import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateQuestionUseCase } from "./CreateQuestionUseCase";

class CreateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { activity_id } = request.params;

    const { name, description, alternatives, answer, score, template } =
      request.body;

    const { id } = request.user;

    const requestImages = request.files as Express.Multer.File[];

    const n = 1;

    const images = requestImages?.map((image) => {
      return { id: n * image.filename.length, path: image.filename };
    });

    const createQuestionUseCase = container.resolve(CreateQuestionUseCase);

    await createQuestionUseCase.execute(
      {
        name,
        description,
        alternatives,
        answer,
        score,
        template,
        questionImages: images,
        activity_id,
      },
      id
    );

    return response.status(201).send();
  }
}

export { CreateQuestionController };
