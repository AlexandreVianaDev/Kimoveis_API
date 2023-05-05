import { z } from "zod";

export const categorySchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(45),
});

export const categoryListSchema = z.array(categorySchema);

export const categoryCreateSchema = categorySchema.omit({
  id: true,
});
