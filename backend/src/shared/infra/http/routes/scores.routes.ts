import { Router } from "express";

import { CreateScoreController } from "@modules/scores/useCases/createScores/CreateScoreController";
import { ListScoreByIdController } from "@modules/scores/useCases/listScoreById/ListScoreByIdController";
import { ListScoresByActivityController } from "@modules/scores/useCases/listScoresByActivity/ListScoreByIdController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureTeacher } from "../middlewares/ensureTeacher";

const scoresRoutes = Router();

const createScoreController = new CreateScoreController();
const listScoreByIdController = new ListScoreByIdController();
const listScoreByActivityController = new ListScoresByActivityController();

scoresRoutes.post(
  "/:activity_id/:score",
  ensureAuthenticated,
  ensureTeacher,
  createScoreController.handle
);

scoresRoutes.get(
  "/:score_id",
  ensureAuthenticated,
  listScoreByIdController.handle
);

scoresRoutes.get("/scores/:activity_id", listScoreByActivityController.handle);

export { scoresRoutes };
