"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionsRepository = void 0;

var _typeorm = require("typeorm");

var _Question = require("../entities/Question");

class QuestionsRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Question.Question);
  }

  async create({
    name,
    description,
    alternatives,
    answer,
    score,
    template,
    questionImages,
    activity_id
  }) {
    const question = this.repository.create({
      name,
      description,
      alternatives,
      answer,
      score,
      template,
      questionImages,
      activity_id
    });
    await this.repository.save(question);
    return question;
  }

  async findQuestionById(question_id) {
    const question = await this.repository.findOne(question_id, {
      relations: ["questionImages"]
    });
    return question;
  }

  async findQuestionsByActivity(activity_id) {
    const questions = await this.repository.find({
      where: {
        activity_id
      },
      relations: ["questionImages"]
    });
    return questions;
  }

}

exports.QuestionsRepository = QuestionsRepository;