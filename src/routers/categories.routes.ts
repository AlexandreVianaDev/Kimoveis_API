import { Router } from "express";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdmin.middleware";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/categories.schemas";
import {
  createCategoryController,
  getCategoriesController,
  getRealEstateFromCategoryController,
} from "../controllers/categories.controllers";
import { ensureCategoryNameNotExistsMiddleware } from "../middlewares/ensureCategoryNameNotExists.middleware";
import { ensureCategoryIdExistsMiddleware } from "../middlewares/ensureCategoryIdExists.middleware";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  ensureCategoryNameNotExistsMiddleware,
  validateBodyMiddleware(categoryCreateSchema),
  createCategoryController
);

categoriesRoutes.get("", getCategoriesController);

categoriesRoutes.get(
  "/:id/realEstate",
  ensureCategoryIdExistsMiddleware,
  getRealEstateFromCategoryController
);
