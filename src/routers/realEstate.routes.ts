import { Router } from "express";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsAdmin } from "../middlewares/ensureUserIsAdmin.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/categories.schemas";
import { createRealEstateController, getRealEstatesController } from "../controllers/realEstate.controllers";

export const realEstatesRoutes: Router = Router();

realEstatesRoutes.post("", ensureTokenIsValid, ensureUserIsAdmin, validateBody(categoryCreateSchema), createRealEstateController);

realEstatesRoutes.get("", getRealEstatesController);

