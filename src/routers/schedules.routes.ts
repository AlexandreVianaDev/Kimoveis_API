import { Router } from "express";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsAdmin } from "../middlewares/ensureUserIsAdmin.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { categoryCreateSchema } from "../schemas/categories.schemas";
import {
  createRealEstateController,
  getRealEstatesController,
} from "../controllers/realEstate.controllers";
import { schedulesCreateSchema } from "../schemas/schedules.schemas";
import {
  createSchedulesController,
  getSchedulesController,
} from "../controllers/schedules.controllers";
import { ensureUserHaveFreeScheduleExists } from "../middlewares/ensureUserHaveFreeSchedule.middleware";
import { ensureRealEstateHaveFreeScheduleExists } from "../middlewares/ensureRealEstateHaveFreeSchedule.middleware";
import { ensureIsWeekDay } from "../middlewares/ensureIsWeekDay.middleware";
import { ensureRealEstateIdExists } from "../middlewares/ensureRealEstateIdExists.middleware";
import { ensureIsCommercialHour } from "../middlewares/ensureIsCommercialHour.middleware";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureTokenIsValid,
  validateBody(schedulesCreateSchema),
  ensureRealEstateIdExists,
  ensureUserHaveFreeScheduleExists,
  ensureRealEstateHaveFreeScheduleExists,
  ensureIsWeekDay,
  ensureIsCommercialHour,
  createSchedulesController
);

schedulesRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValid,
  ensureUserIsAdmin,
  getRealEstatesController,
  getSchedulesController
);
