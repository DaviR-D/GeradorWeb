import { Router } from "express";

import { RefreshTokenController } from "@modules/accounts/useCases/refreshToken/RefreshTokenController";
import { AuthenticateStudentController } from "@modules/students/useCases/authenticateStudent/AuthenticateUserController";

const authenticateStudentRoutes = Router();

const authenticateStudentController = new AuthenticateStudentController();
const refreshTokenController = new RefreshTokenController();

authenticateStudentRoutes.post(
  "/sessions",
  authenticateStudentController.handle
);
authenticateStudentRoutes.post("/refresh-token", refreshTokenController.handle);

export { authenticateStudentRoutes };
