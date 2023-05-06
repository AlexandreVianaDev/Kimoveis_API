import { z } from "zod"
import { schedulesCreateSchema, schedulesSchema } from "../schemas/schedules.schemas"

export type TSchedule = z.infer<typeof schedulesSchema>

export type TScheduleCreate = z.infer<typeof schedulesCreateSchema>
