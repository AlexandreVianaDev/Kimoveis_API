import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { userLoginSchema } from "../schemas/users.schemas";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExists.middleware copy";
import { loginUserController } from "../controllers/login.controllers";

export const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  validateBodyMiddleware(userLoginSchema),
  ensureEmailExistsMiddleware,
  loginUserController
);
