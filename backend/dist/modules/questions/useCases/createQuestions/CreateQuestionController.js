"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateQuestionController = void 0;

var _tsyringe = require("tsyringe");

var _CreateQuestionUseCase = require("./CreateQuestionUseCase");

class CreateQuestionController {
  async handle(request, response) {
    const {
      activity_id
    } = request.params;
    const {
      name,
      description,
      alternatives,
      answer,
      score,
      template
    } = request.body;
    const {
      id
    } = request.user;
    const requestImages = request.files;
    const n = 1;
    const images = requestImages?.map(image => {
      return {
        id: n * image.filename.length,
        path: image.filename
      };
    });

    const createQuestionUseCase = _tsyringe.container.resolve(_CreateQuestionUseCase.CreateQuestionUseCase);

    await createQuestionUseCase.execute({
      name,
      description,
      alternatives,
      answer,
      score,
      template,
      questionImages: images,
      activity_id
    }, id);
    return response.status(201).send();
  }

}

exports.CreateQuestionController = CreateQuestionController;