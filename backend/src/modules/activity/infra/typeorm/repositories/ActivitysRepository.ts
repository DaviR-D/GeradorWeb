import { getRepository, Repository } from "typeorm";

import { ICreateActivityDTO } from "@modules/activity/dtos/ICreateActivityDTO";
import { IActivitysRepository } from "@modules/activity/repositories/IActivitysRepository";

import { Activity } from "../entities/Activity";

class ActivitysRepository implements IActivitysRepository {
  private repository: Repository<Activity>;

  constructor() {
    this.repository = getRepository(Activity);
  }

  async create({ name, user_id }: ICreateActivityDTO): Promise<Activity> {
    const activity = this.repository.create({
      name,
      user_id,
    });

    await this.repository.save(activity);

    return activity;
  }

  async findAcitvityById(activity_id: string): Promise<Activity> {
    const activity = await this.repository.findOne(activity_id);

    return activity;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findByUser(user_id: string): Promise<Activity[]> {
    const activity = await this.repository.find({
      // where: { user_id },
    });

    return activity;
  }
}

export { ActivitysRepository };
