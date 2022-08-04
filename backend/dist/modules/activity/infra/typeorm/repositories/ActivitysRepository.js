"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActivitysRepository = void 0;

var _typeorm = require("typeorm");

var _Activity = require("../entities/Activity");

class ActivitysRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Activity.Activity);
  }

  async create({
    name,
    user_id
  }) {
    const activity = this.repository.create({
      name,
      user_id
    });
    await this.repository.save(activity);
    return activity;
  }

  async findAcitvityById(activity_id) {
    const activity = await this.repository.findOne(activity_id);
    return activity;
  }

  async findByUser(user_id) {
    const activity = await this.repository.find({
      where: {
        user_id
      }
    });
    return activity;
  }

}

exports.ActivitysRepository = ActivitysRepository;