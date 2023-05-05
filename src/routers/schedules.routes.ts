import { Router } from "express";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsAdmin } from "../middlewares/ensureUserIsAdmin.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/categories.schemas";
import {
  createRealEstateController,
  getRealEstatesController,
} from "../controllers/realEstate.controllers";
import { ensureAddressNotExists } from "../middlewares/ensureAddressNotExists.middleware";
import { realEstateCreateSchema } from "../schemas/realEstate.schemas";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureTokenIsValid,
//   validateBody(realEstateCreateSchema),
);

schedulesRoutes.get("/realEstate/:id", ensureTokenIsValid, ensureUserIsAdmin, getRealEstatesController);
