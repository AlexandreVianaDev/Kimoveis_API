import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  TUserCreate,
  TUserWithoutPassword,
} from "../../interfaces/users.interfaces";
import { userWithoutPasswordSchema } from "../../schemas/users.schemas";

export const createUserService = async (
  payload: TUserCreate
): Promise<TUserWithoutPassword> => {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  const userWithPassword: User = usersRepo.create(payload);

  await usersRepo.save(userWithPassword);

  const user = userWithoutPasswordSchema.parse(userWithPassword);

  return user;
};
