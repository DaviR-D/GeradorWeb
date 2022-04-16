import { Router } from "express";

import { CreateQuestionController } from "@modules/questions/useCases/createActivity/CreateQuestionController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureTeacher } from "../middlewares/ensureTeacher";

const questionsRoutes = Router();

const createQuestionController = new CreateQuestionController();

questionsRoutes.post(
  "/:activity_id",
  ensureAuthenticated,
  ensureTeacher,
  createQuestionController.handle
);

export { questionsRoutes };
