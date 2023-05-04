import { z } from "zod";
import {
  userCreateSchema,
  userSchema,
  userUpdateSchema,
} from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

export type TUser = z.infer<typeof userSchema>;

export type TUserWithoutPassword = z.infer<typeof userWithoutPasswordSchema>;

export type TUserCreate = z.infer<typeof userCreateSchema>;

export type TUserUpdateWithoutDeepPartial = z.infer<typeof userUpdateSchema>;

export type TUserUpdate = DeepPartial<TUserUpdateWithoutDeepPartial>;

export const userWithoutPasswordSchema = userSchema.omit({
  password: true,
});
