import { randomInt } from "crypto";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateQuestionUseCase } from "./UpdateQuestionUseCase";

class UpdateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { activity_id } = request.params;

    const {
      name,
      description,
      alternatives,
      answer,
      score,
      template,
      question_id,
    } = request.body;

    const { id } = request.user;

    const requestImages = request.files as Express.Multer.File[];

    // const n = 1;

    const images = requestImages?.map((image) => {
      const fileHash = randomInt(0, 2147483647);
      return { id: fileHash, path: image.filename };
      // return { id: n * image.filename.length, path: image.filename };
    });

    const updateQuestionUseCase = container.resolve(UpdateQuestionUseCase);

    await updateQuestionUseCase.execute(
      {
        name,
        description,
        alternatives,
        answer,
        score,
        template,
        questionImages: images,
        activity_id,
        question_id,
      },
      id
    );

    return response.status(201).send();
  }
}

export { UpdateQuestionController };
