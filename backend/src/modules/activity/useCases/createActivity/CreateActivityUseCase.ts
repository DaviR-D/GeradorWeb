import { inject, injectable } from "tsyringe";

import { ICreateActivityDTO } from "@modules/activity/dtos/ICreateActivityDTO";
import { IActivitysRepository } from "@modules/activity/repositories/IActivitysRepository";

@injectable()
class CreateAcitvityUseCase {
  constructor(
    @inject("ActivitysRepository")
    private activitysRepositories: IActivitysRepository
  ) {}

  async execute({ name, user_id }: ICreateActivityDTO): Promise<void> {
    await this.activitysRepositories.create({
      name,
      user_id,
    });
  }
}

export { CreateAcitvityUseCase };
