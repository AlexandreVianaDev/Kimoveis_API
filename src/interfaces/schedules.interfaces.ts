import { z } from "zod";
import {
  schedulesCreateSchema,
  schedulesSchema,
  schedulesWithUserIdSchema,
} from "../schemas/schedules.schemas";

export type TSchedule = z.infer<typeof schedulesSchema>;

export type TScheduleCreate = z.infer<typeof schedulesCreateSchema>;

export type TSchedulesWithUserIdSchema = z.infer<
  typeof schedulesWithUserIdSchema
>;
