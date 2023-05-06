import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

export const ensureEmailNotExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const emailBody: string = req.body.email;

  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepo.findOne({
    where: {
      email: emailBody,
    },
  });

  if (user && emailBody) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
