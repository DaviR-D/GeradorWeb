import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateQuestionController } from "@modules/questions/useCases/createQuestions/CreateQuestionController";
import { ListQuestionByIdController } from "@modules/questions/useCases/listQuestionById/ListQuestionByIdController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureTeacher } from "../middlewares/ensureTeacher";

const questionsRoutes = Router();

const uploadQuestionImages = multer(
  uploadConfig.upload("./tmp/questionImages")
);

const createQuestionController = new CreateQuestionController();
const listQuestionByIdController = new ListQuestionByIdController();

questionsRoutes.post(
  "/:activity_id",
  ensureAuthenticated,
  ensureTeacher,
  uploadQuestionImages.array("questionImages"),
  createQuestionController.handle
);

questionsRoutes.get(
  "/:question_id",
  ensureAuthenticated,
  listQuestionByIdController.handle
);

export { questionsRoutes };
