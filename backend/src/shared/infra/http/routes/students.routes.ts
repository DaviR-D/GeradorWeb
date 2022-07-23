import { Router } from "express";

import { CreateStudentController } from "@modules/students/useCases/createStudent/CreateStudentController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const studentsRoutes = Router();

const createStudentController = new CreateStudentController();

studentsRoutes.post("/", ensureAuthenticated, createStudentController.handle);

export { studentsRoutes };
