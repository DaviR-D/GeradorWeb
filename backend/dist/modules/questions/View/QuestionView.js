"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _QuestionImagesView = _interopRequireDefault(require("./QuestionImagesView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  render(question) {
    return {
      id: question.id,
      name: question.name,
      description: question.description,
      alternatives: question.alternatives,
      answer: question.answer,
      score: question.score,
      template: question.template,
      activity: question.activity_id,
      questionImages: _QuestionImagesView.default.renderMany(question.questionImages)
    };
  },

  renderMany(questions) {
    return questions.map(question => this.render(question));
  }

};
exports.default = _default;