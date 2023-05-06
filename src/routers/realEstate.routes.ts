import { Router } from "express";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdmin.middleware";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import {
  createRealEstateController,
  getRealEstatesController,
} from "../controllers/realEstate.controllers";
import { ensureAddressNotExistsMiddleware } from "../middlewares/ensureAddressNotExists.middleware";
import { realEstateCreateSchema } from "../schemas/realEstate.schemas";

export const realEstatesRoutes: Router = Router();

realEstatesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  validateBodyMiddleware(realEstateCreateSchema),
  ensureAddressNotExistsMiddleware,
  createRealEstateController
);

realEstatesRoutes.get("", getRealEstatesController);
