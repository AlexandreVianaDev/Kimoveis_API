import { Router } from "express";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdmin.middleware";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { schedulesCreateSchema } from "../schemas/schedules.schemas";
import {
  createSchedulesController,
  getSchedulesController,
} from "../controllers/schedules.controllers";
import { ensureUserHaveFreeScheduleExistsMiddleware } from "../middlewares/ensureUserHaveFreeSchedule.middleware";
import { ensureRealEstateHaveFreeScheduleExistsMiddleware } from "../middlewares/ensureRealEstateHaveFreeSchedule.middleware";
import { ensureIsWeekDayMiddleware } from "../middlewares/ensureIsWeekDay.middleware";
import { ensureRealEstateIdExistsMiddleware } from "../middlewares/ensureRealEstateIdExists.middleware";
import { ensureIsCommercialHourMiddleware } from "../middlewares/ensureIsCommercialHour.middleware";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  validateBodyMiddleware(schedulesCreateSchema),
  ensureRealEstateIdExistsMiddleware,
  ensureUserHaveFreeScheduleExistsMiddleware,
  ensureRealEstateHaveFreeScheduleExistsMiddleware,
  ensureIsWeekDayMiddleware,
  ensureIsCommercialHourMiddleware,
  createSchedulesController
);

schedulesRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  ensureRealEstateIdExistsMiddleware,
  getSchedulesController
);
