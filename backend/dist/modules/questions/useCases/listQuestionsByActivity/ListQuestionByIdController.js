"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListQuestionsByActivityController = void 0;

var _tsyringe = require("tsyringe");

var _QuestionView = _interopRequireDefault(require("../../View/QuestionView"));

var _ListQuestionsByActivityUseCase = require("./ListQuestionsByActivityUseCase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListQuestionsByActivityController {
  async handle(request, response) {
    const {
      activity_id
    } = request.params;

    const listQuestionByActivityUseCase = _tsyringe.container.resolve(_ListQuestionsByActivityUseCase.ListQuestionsByActivityUseCase);

    const questions = await listQuestionByActivityUseCase.execute(activity_id);
    return response.json(_QuestionView.default.renderMany(questions));
  }

}

exports.ListQuestionsByActivityController = ListQuestionsByActivityController;