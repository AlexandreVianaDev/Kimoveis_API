import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/users.schemas";
import { ensureEmailNotExists } from "../middlewares/ensureEmailNotExists.middleware";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  validateBody(userCreateSchema),
  ensureEmailNotExists,
  createUserController
);
