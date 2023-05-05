import { compare } from "bcryptjs";
import { AppError } from "../../error";
import { IToken, TUserLogin } from "../../interfaces/users.interfaces";
import { sign } from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";

export const loginUserService = async (
  userData: TUserLogin
): Promise<IToken> => {
  const emailBody: string = userData.email;

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({
    email: emailBody,
  });

  const passwordMatch: boolean = await compare(
    userData.password,
    user!.password
  );

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { email: user!.email, admin: user!.admin },
    String(process.env.SECRET_KEY),
    { expiresIn: String(process.env.EXPIRES_IN), subject: String(user!.id) }
  );

  return { token };
};
