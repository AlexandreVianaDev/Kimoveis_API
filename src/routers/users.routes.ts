import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import { userCreateSchema, userUpdateBodySchema } from "../schemas/users.schemas";
import { ensureEmailNotExists } from "../middlewares/ensureEmailNotExists.middleware";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsAdmin } from "../middlewares/ensureUserIsAdmin.middleware";
import { ensureUserIdExists } from "../middlewares/ensureUserIdExists";
import { validateBody } from "../middlewares/validateBody.middleware";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  validateBody(userCreateSchema),
  ensureEmailNotExists,
  createUserController
);

usersRoutes.get("", ensureTokenIsValid, ensureUserIsAdmin, getUsersController);

usersRoutes.patch(
  "/:id",
  ensureUserIdExists,
  ensureTokenIsValid,
  ensureUserIsAdmin,
  validateBody(userUpdateBodySchema),
  updateUserController
);

usersRoutes.delete("/:id", ensureUserIdExists,
ensureTokenIsValid,
ensureUserIsAdmin, deleteUserController)
