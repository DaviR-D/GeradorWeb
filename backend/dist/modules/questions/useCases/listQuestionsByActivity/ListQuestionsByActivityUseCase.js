"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListQuestionsByActivityUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IQuestionsRepository = require("../../repositories/IQuestionsRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ListQuestionsByActivityUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("QuestionsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IQuestionsRepository.IQuestionsRepository === "undefined" ? Object : _IQuestionsRepository.IQuestionsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListQuestionsByActivityUseCase {
  constructor(questionsRepositories) {
    this.questionsRepositories = questionsRepositories;
  }

  async execute(activity_id) {
    const questions = await this.questionsRepositories.findQuestionsByActivity(activity_id);
    return questions;
  }

}) || _class) || _class) || _class) || _class);
exports.ListQuestionsByActivityUseCase = ListQuestionsByActivityUseCase;