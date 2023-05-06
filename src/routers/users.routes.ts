import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import {
  userCreateSchema,
  userUpdateBodySchema,
} from "../schemas/users.schemas";
import { ensureEmailNotExistsMiddleware } from "../middlewares/ensureEmailNotExists.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdmin.middleware";
import { ensureUserIdExistsMiddleware } from "../middlewares/ensureUserIdExists.middleware";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  validateBodyMiddleware(userCreateSchema),
  ensureEmailNotExistsMiddleware,
  createUserController
);

usersRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  getUsersController
);

usersRoutes.patch(
  "/:id",
  ensureUserIdExistsMiddleware,
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  validateBodyMiddleware(userUpdateBodySchema),
  updateUserController
);

usersRoutes.delete(
  "/:id",
  ensureUserIdExistsMiddleware,
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  deleteUserController
);
