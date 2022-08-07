"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateActivityController = void 0;

var _tsyringe = require("tsyringe");

var _CreateActivityUseCase = require("./CreateActivityUseCase");

class CreateActivityController {
  async handle(request, response) {
    const {
      id
    } = request.user;
    const {
      name
    } = request.body;

    const createActivityUseCase = _tsyringe.container.resolve(_CreateActivityUseCase.CreateAcitvityUseCase);

    const activity = await createActivityUseCase.execute({
      name,
      user_id: id
    });
    return response.status(201).json(activity);
  }

}

exports.CreateActivityController = CreateActivityController;