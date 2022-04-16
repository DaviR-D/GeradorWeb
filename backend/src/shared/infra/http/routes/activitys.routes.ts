import { Router } from "express";

import { CreateActivityController } from "@modules/activity/useCases/createActivity/CreateActivityController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureTeacher } from "../middlewares/ensureTeacher";

const activitysRoutes = Router();

const createActivityController = new CreateActivityController();

activitysRoutes.post(
  "/",
  ensureAuthenticated,
  ensureTeacher,
  createActivityController.handle
);

export { activitysRoutes };
