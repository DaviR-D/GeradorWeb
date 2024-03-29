import { inject, injectable } from "tsyringe";

import { ICreateActivityDTO } from "@modules/activity/dtos/ICreateActivityDTO";
import { Activity } from "@modules/activity/infra/typeorm/entities/Activity";
import { IActivitysRepository } from "@modules/activity/repositories/IActivitysRepository";

@injectable()
class CreateAcitvityUseCase {
  constructor(
    @inject("ActivitysRepository")
    private activitysRepositories: IActivitysRepository
  ) {}

  async execute({ name, user_id }: ICreateActivityDTO): Promise<Activity> {
    const activity = await this.activitysRepositories.create({
      name,
      user_id,
    });

    return activity;
  }
}

export { CreateAcitvityUseCase };
