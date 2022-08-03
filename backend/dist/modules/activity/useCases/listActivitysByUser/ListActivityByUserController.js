"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListActivityByUserController = void 0;

var _tsyringe = require("tsyringe");

var _ListActivityByUserUseCase = require("./ListActivityByUserUseCase");

class ListActivityByUserController {
  async handle(request, response) {
    const {
      id
    } = request.user;

    const listActivityByUserUseCase = _tsyringe.container.resolve(_ListActivityByUserUseCase.ListActivityByUserUseCase);

    const activitys = await listActivityByUserUseCase.execute(id);
    return response.json(activitys);
  }

}

exports.ListActivityByUserController = ListActivityByUserController;