import { z } from "zod";

export const dateSchema = z.union([z.string(), z.date()]);

export const userSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().nullish(),
  createdAt: dateSchema,
  updatedAt: dateSchema,
  deletedAt: dateSchema.nullish(),
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
