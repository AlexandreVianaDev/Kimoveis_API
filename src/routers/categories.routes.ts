import { Router } from "express";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsAdmin } from "../middlewares/ensureUserIsAdmin.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/categories.schemas";
import { createCategoryController, getCategoriesController } from "../controllers/categories.controllers";
import { ensureCategoryNameNotExists } from "../middlewares/ensureCategoryNameNotExists.middleware";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post("", ensureTokenIsValid, ensureUserIsAdmin, ensureCategoryNameNotExists, validateBody(categoryCreateSchema), createCategoryController);

categoriesRoutes.get("", getCategoriesController);

// categoriesRoutes.get("/:id/realEstate");
