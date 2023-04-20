import { Response } from "express";
import { getRepository } from "typeorm";

import { Score } from "@modules/scores/infra/typeorm/entities/Score";

class DeleteScoresByActivityController {
  async handle(activity_id: string, response: Response): Promise<Response> {
    await getRepository(Score)
      .createQueryBuilder("scores")
      .delete()
      .from(Score)
      .where("activity_id = :id", { id: activity_id })
      .execute();

    return response;
  }
}

export { DeleteScoresByActivityController };
