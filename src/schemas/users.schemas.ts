import { z } from "zod";

export const userSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(45),
  email: z.string().max(45),
  password: z.string().max(120),
  admin: z.boolean().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

export const userWithoutPasswordSchema = userSchema.omit({
  password: true,
});

export const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const userUpdateSchema = userCreateSchema
  .omit({
    admin: true,
  })
  .partial();
