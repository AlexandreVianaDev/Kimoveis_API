import { z } from "zod";
import {
  userCreateSchema,
  userLoginSchema,
  userSchema,
  userUpdateSchema,
  userWithoutPasswordSchema,
} from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

export type TUser = z.infer<typeof userSchema>;

export type TUserWithoutPassword = z.infer<typeof userWithoutPasswordSchema>;

export type TUserCreate = z.infer<typeof userCreateSchema>;

export type TUserLogin = z.infer<typeof userLoginSchema>;

export type TUserUpdateWithoutDeepPartial = z.infer<typeof userUpdateSchema>;

export type TUserUpdate = DeepPartial<TUserUpdateWithoutDeepPartial>;

export interface IToken {
  token: string;
}
