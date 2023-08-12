import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { AddCoinsByIdController } from "@modules/accounts/useCases/addCoinsById/AddCoinsByIdController";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { GetCoinsByIdController } from "@modules/accounts/useCases/getCoinsById/GetCoinsByIdController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureTeacher } from "../middlewares/ensureTeacher";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const getCoinsByIdController = new GetCoinsByIdController();
const addCoinsByIdController = new AddCoinsByIdController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/logged", ensureAuthenticated, ensureTeacher);

usersRoutes.get("/coins", ensureAuthenticated, getCoinsByIdController.handle);
usersRoutes.post("/coins", ensureAuthenticated, addCoinsByIdController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { usersRoutes };
