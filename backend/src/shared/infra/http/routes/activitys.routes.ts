import { Router } from "express";

import { CreateActivityController } from "@modules/activity/useCases/createActivity/CreateActivityController";
import { DeleteActivityByUserController } from "@modules/activity/useCases/deleteActivity/DeleteActivityController";
import { ListActivityByUserController } from "@modules/activity/useCases/listActivitysByUser/ListActivityByUserController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureTeacher } from "../middlewares/ensureTeacher";

const activitysRoutes = Router();

const createActivityController = new CreateActivityController();
const listActivityByUserController = new ListActivityByUserController();
const deleteActivityByUserController = new DeleteActivityByUserController();

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

activitysRoutes.delete(
  "/:activity_id",
  ensureAuthenticated,
  deleteActivityByUserController.handle
);

export { activitysRoutes };
