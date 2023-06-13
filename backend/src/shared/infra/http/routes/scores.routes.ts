import { Router } from "express";

import { CreateScoreController } from "@modules/scores/useCases/createScores/CreateScoreController";
// import { ListScoreByIdController } from "@modules/scores/useCases/listScoreById/ListScoreByIdController";
import { ListGroupedScoresController } from "@modules/scores/useCases/listGroupedScores/ListGroupedScoresController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const scoresRoutes = Router();

const createScoreController = new CreateScoreController();
// const listScoreByIdController = new ListScoreByIdController();
const listGroupedScoreController = new ListGroupedScoresController();

scoresRoutes.post(
  "/:activity_id",
  ensureAuthenticated,
  createScoreController.handle
);

scoresRoutes.get(
  "/grouped",
  ensureAuthenticated,
  listGroupedScoreController.handle
);

// scoresRoutes.get("/scores/:activity_id", listScoreByActivityController.handle);

export { scoresRoutes };
