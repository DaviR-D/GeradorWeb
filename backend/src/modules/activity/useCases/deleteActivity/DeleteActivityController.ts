import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Activity } from "@modules/activity/infra/typeorm/entities/Activity";
import { DeleteQuestionsByActivityController } from "@modules/questions/useCases/deleteQuestionsByActivity/DeleteQuestionByActivityController";
import { DeleteScoresByActivityController } from "@modules/scores/useCases/deleteScoresByActivity/DeleteScoreByActivityController";

class DeleteActivityByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { activity_id } = request.params;
    const deleteQuestions = new DeleteQuestionsByActivityController();
    const deleteScores = new DeleteScoresByActivityController();
    await deleteQuestions.handle(activity_id, response);
    await deleteScores.handle(activity_id, response);

    await getRepository(Activity)
      .createQueryBuilder("activitys")
      .delete()
      .from(Activity)
      .where("id = :id", { id: activity_id })
      .execute();

    return response.json(200);
  }
}

export { DeleteActivityByUserController };
