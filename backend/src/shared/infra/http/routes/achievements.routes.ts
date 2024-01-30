import { Router } from "express";

import { ListAchievementsController } from "@modules/achievements/useCases/listAchievements/ListAchievementsController";
import { GetAchievementController } from "@modules/userAchievements/useCases/getAchievement/GetAchievementController";
import { ListAchievementsByIdController } from "@modules/userAchievements/useCases/listUserAchievementsById/ListAchievementsByIdController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const achievementsRoutes = Router();

const listAchievementsController = new ListAchievementsController();
const listAchievementsByIdController = new ListAchievementsByIdController();
const getAchievementController = new GetAchievementController();

achievementsRoutes.get(
  "/",
  ensureAuthenticated,
  listAchievementsController.handle
);
achievementsRoutes.post(
  "/get",
  ensureAuthenticated,
  getAchievementController.handle
);
achievementsRoutes.get(
  "/list",
  ensureAuthenticated,
  listAchievementsByIdController.handle
);

export { achievementsRoutes };
