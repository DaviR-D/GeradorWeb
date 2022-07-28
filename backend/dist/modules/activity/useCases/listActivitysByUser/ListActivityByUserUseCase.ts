import { inject, injectable } from "tsyringe";

import { Activity } from "@modules/activity/infra/typeorm/entities/Activity";
import { IActivitysRepository } from "@modules/activity/repositories/IActivitysRepository";

@injectable()
class ListActivityByUserUseCase {
  constructor(
    @inject("ActivitysRepository")
    private activitysRepositories: IActivitysRepository
  ) {}

  async execute(user_id: string): Promise<Activity[]> {
    const activitysByUser = await this.activitysRepositories.findByUser(
      user_id
    );

    return activitysByUser;
  }
}

export { ListActivityByUserUseCase };
