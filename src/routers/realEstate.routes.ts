import { Router } from "express";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsAdmin } from "../middlewares/ensureUserIsAdmin.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import {
  createRealEstateController,
  getRealEstatesController,
} from "../controllers/realEstate.controllers";
import { ensureAddressNotExists } from "../middlewares/ensureAddressNotExists.middleware";
import { realEstateCreateSchema } from "../schemas/realEstate.schemas";

export const realEstatesRoutes: Router = Router();

realEstatesRoutes.post(
  "",
  ensureTokenIsValid,
  ensureUserIsAdmin,
  validateBody(realEstateCreateSchema),
  ensureAddressNotExists,
  createRealEstateController
);

realEstatesRoutes.get("", getRealEstatesController);
