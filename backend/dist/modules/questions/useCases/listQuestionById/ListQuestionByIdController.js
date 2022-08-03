"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListQuestionByIdController = void 0;

var _tsyringe = require("tsyringe");

var _QuestionView = _interopRequireDefault(require("../../View/QuestionView"));

var _ListQuestionByIdUseCase = require("./ListQuestionByIdUseCase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListQuestionByIdController {
  async handle(request, response) {
    const {
      question_id
    } = request.params;

    const listQuestionByIdUseCase = _tsyringe.container.resolve(_ListQuestionByIdUseCase.ListQuestionByIdUseCase);

    const question = await listQuestionByIdUseCase.execute(question_id);
    return response.json(_QuestionView.default.render(question));
  }

}

exports.ListQuestionByIdController = ListQuestionByIdController;