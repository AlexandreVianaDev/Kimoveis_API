import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userLoginSchema } from "../schemas/users.schemas";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware copy";
import { loginUserController } from "../controllers/login.controllers";

export const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  validateBody(userLoginSchema),
  ensureEmailExists,
  loginUserController
);
