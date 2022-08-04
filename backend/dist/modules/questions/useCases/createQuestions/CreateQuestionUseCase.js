"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateQuestionUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IActivitysRepository = require("../../../activity/repositories/IActivitysRepository");

var _IQuestionsRepository = require("../../repositories/IQuestionsRepository");

var _AppError = require("../../../../shared/errors/AppError");

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

let CreateQuestionUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("QuestionsRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("ActivitysRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IQuestionsRepository.IQuestionsRepository === "undefined" ? Object : _IQuestionsRepository.IQuestionsRepository, typeof _IActivitysRepository.IActivitysRepository === "undefined" ? Object : _IActivitysRepository.IActivitysRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateQuestionUseCase {
  constructor(questionsRepositories, activitysRepositories) {
    this.questionsRepositories = questionsRepositories;
    this.activitysRepositories = activitysRepositories;
  }

  async execute({
    name,
    description,
    alternatives,
    answer,
    score,
    template,
    questionImages,
    activity_id
  }, // Bug INESPLICAVEL
  id) {
    const activity = await this.activitysRepositories.findAcitvityById(activity_id);
    const user = activity.user_id;

    if (user !== id) {
      throw new _AppError.AppError("Usuário logado diferente");
    }

    await this.questionsRepositories.create({
      name,
      description,
      alternatives,
      answer,
      score,
      template,
      questionImages,
      activity_id
    });
  }

}) || _class) || _class) || _class) || _class) || _class);
exports.CreateQuestionUseCase = CreateQuestionUseCase;