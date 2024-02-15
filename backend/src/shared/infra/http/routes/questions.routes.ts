import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateQuestionController } from "@modules/questions/useCases/createQuestions/CreateQuestionController";
import { DeleteQuestionController } from "@modules/questions/useCases/deleteQuestion/DeleteQuestionController";
import { ListQuestionByIdController } from "@modules/questions/useCases/listQuestionById/ListQuestionByIdController";
import { ListQuestionsByActivityController } from "@modules/questions/useCases/listQuestionsByActivity/ListQuestionByIdController";
import { UpdateQuestionController } from "@modules/questions/useCases/updateQuestion/UpdateQuestionController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureTeacher } from "../middlewares/ensureTeacher";

const questionsRoutes = Router();

const uploadQuestionImages = multer(
  uploadConfig.upload("./tmp/questionImages")
);

const createQuestionController = new CreateQuestionController();
const updateQuestionController = new UpdateQuestionController();
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

questionsRoutes.post(
  "/:activity_id/update",
  ensureAuthenticated,
  ensureTeacher,
  uploadQuestionImages.array("questionImages"),
  updateQuestionController.handle
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
  "/:id",
  ensureAuthenticated,
  ensureTeacher,
  deleteQuestionController.handle
);

export { questionsRoutes };
