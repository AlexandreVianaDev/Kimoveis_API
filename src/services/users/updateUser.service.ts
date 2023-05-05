import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  TUser,
  TUserCreate,
  TUserUpdate,
  TUserWithoutPassword,
} from "../../interfaces/users.interfaces";
import {
  userUpdateBodySchema,
  userUpdateSchema,
  userWithoutPasswordSchema,
} from "../../schemas/users.schemas";

export const updateUserService = async (
  payload: TUserUpdate,
  idParams: number
): Promise<TUserWithoutPassword> => {

  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  const userFound: User | null = await usersRepo.findOne({
    where: {
      id: idParams,
    },
  });

  const userUpdated: User = usersRepo.create({
    ...userFound!,
    ...payload,
  });

  await usersRepo.save(userUpdated);

  const user = userWithoutPasswordSchema.parse(userUpdated);

  return user;
};
