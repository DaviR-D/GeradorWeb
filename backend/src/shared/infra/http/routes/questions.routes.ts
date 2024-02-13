import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateQuestionController } from "@modules/questions/useCases/createQuestions/CreateQuestionController";
import { DeleteQuestionController } from "@modules/questions/useCases/deleteQuestion/DeleteQuestionController";
import { ListQuestionByIdController } from "@modules/questions/useCases/listQuestionById/ListQuestionByIdController";
import { ListQuestionsByActivityController } from "@modules/questions/useCases/listQuestionsByActivity/ListQuestionByIdController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureTeacher } from "../middlewares/ensureTeacher";

const questionsRoutes = Router();

const uploadQuestionImages = multer(
  uploadConfig.upload("./tmp/questionImages")
);

const createQuestionController = new CreateQuestionController();
const deleteQuestionController = new DeleteQuestionController();
const listQuestionByIdController = new ListQuestionByIdController();
const listQuestionByActivityController =
  new ListQuestionsByActivityController();

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

questionsRoutes.get(
  "/questions/:activity_id",
  listQuestionByActivityController.handle
);

questionsRoutes.delete(
  "/",
  ensureAuthenticated,
  ensureTeacher,
  deleteQuestionController.handle
);

export { questionsRoutes };
