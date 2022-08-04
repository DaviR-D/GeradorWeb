"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListQuestionByIdUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IQuestionsRepository = require("../../repositories/IQuestionsRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ListQuestionByIdUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("QuestionsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IQuestionsRepository.IQuestionsRepository === "undefined" ? Object : _IQuestionsRepository.IQuestionsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListQuestionByIdUseCase {
  constructor(questionsRepositories) {
    this.questionsRepositories = questionsRepositories;
  }

  async execute(question_id) {
    const questionById = await this.questionsRepositories.findQuestionById(question_id);
    return questionById;
  }

}) || _class) || _class) || _class) || _class);
exports.ListQuestionByIdUseCase = ListQuestionByIdUseCase;