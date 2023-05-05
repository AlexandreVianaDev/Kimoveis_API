import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { loginUserController } from "../controllers/users.controllers";
import { userLoginSchema } from "../schemas/users.schemas";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware copy";

export const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  validateBody(userLoginSchema),
  ensureEmailExists,
  loginUserController
);
