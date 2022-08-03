"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAcitvityUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IActivitysRepository = require("../../repositories/IActivitysRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateAcitvityUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("ActivitysRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IActivitysRepository.IActivitysRepository === "undefined" ? Object : _IActivitysRepository.IActivitysRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateAcitvityUseCase {
  constructor(activitysRepositories) {
    this.activitysRepositories = activitysRepositories;
  }

  async execute({
    name,
    user_id
  }) {
    await this.activitysRepositories.create({
      name,
      user_id
    });
  }

}) || _class) || _class) || _class) || _class);
exports.CreateAcitvityUseCase = CreateAcitvityUseCase;