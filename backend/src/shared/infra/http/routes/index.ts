import { Router } from "express";

import { activitysRoutes } from "./activitys.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { passwordRoutes } from "./password.routes";
import { questionsRoutes } from "./questions.routes";
import { studentsRoutes } from "./students.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/students", studentsRoutes);
router.use("/password", passwordRoutes);
router.use("/activitys", activitysRoutes);
router.use("/questions", questionsRoutes);
router.use(authenticateRoutes);

export { router };
