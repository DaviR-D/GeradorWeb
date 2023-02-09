import { Router } from "express";

import { CreateActivityController } from "@modules/activity/useCases/createActivity/CreateActivityController";
import { ListActivityByUserController } from "@modules/activity/useCases/listActivitysByUser/ListActivityByUserController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureTeacher } from "../middlewares/ensureTeacher";

const activitysRoutes = Router();

const createActivityController = new CreateActivityController();
const listActivityByUserController = new ListActivityByUserController();

activitysRoutes.post(
  "/",
  ensureAuthenticated,
  ensureTeacher,
  createActivityController.handle
);

activitysRoutes.get(
  "/",
  ensureAuthenticated,
  listActivityByUserController.handle
);

export { activitysRoutes };
