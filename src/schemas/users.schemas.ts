import { z } from "zod";

export const userSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

export const userWithoutPasswordSchema = userSchema.omit({
  password: true,
});

export const userListSchema = z.array(userWithoutPasswordSchema);

export const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const userLoginSchema = userCreateSchema.omit({
  admin: true,
  name: true,
});

export const userUpdateSchema = userCreateSchema.omit({
  admin: true,
});

export const userUpdateBodySchema = userUpdateSchema.partial();
