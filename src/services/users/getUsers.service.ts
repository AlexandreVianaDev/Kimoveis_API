import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TUserWithoutPassword } from "../../interfaces/users.interfaces";
import { userListSchema } from "../../schemas/users.schemas";

export const getUsersService = async (): Promise<TUserWithoutPassword[]> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const usersWithPassword: User[] | null = await userRepo.find();

  const users: TUserWithoutPassword[] | null = userListSchema.parse(usersWithPassword)

  return users;
};
