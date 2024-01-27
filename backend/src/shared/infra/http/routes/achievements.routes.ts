import { Router } from "express";

import { ListAchievementsController } from "@modules/achievements/useCases/listAchievements/ListAchievementsController";
// import { BuyAchievementController } from "@modules/userAchievements/useCases/buyAchievement/BuyAchievementController";
// import { ListAchievementsByIdController } from "@modules/userAchievements/useCases/listUserAchievementsById/ListAchievementsByIdController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const achievementsRoutes = Router();

const listAchievementsController = new ListAchievementsController();
// const listAchievementsByIdController = new ListAchievementsByIdController();
// const buyAchievementController = new BuyAchievementController();

achievementsRoutes.get(
  "/",
  ensureAuthenticated,
  listAchievementsController.handle
);
// achievementsRoutes.post(
//   "/buy",
//   ensureAuthenticated,
//   buyAchievementController.handle
// );
// achievementsRoutes.get(
//   "/list",
//   ensureAuthenticated,
//   listAchievementsByIdController.handle
// );

export { achievementsRoutes };
