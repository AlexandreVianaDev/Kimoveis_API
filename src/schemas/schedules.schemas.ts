import { z } from "zod";

export const schedulesSchema = z.object({
  id: z.number().int().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int().positive(),
  userId: z.number().int().positive(),
});

export const schedulesCreateSchema = schedulesSchema.omit({
    id: true,
    userId: true
})

export const schedulesWithUserIdSchema = schedulesSchema.omit({
  id: true
})