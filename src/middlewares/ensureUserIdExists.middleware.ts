import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";

export const ensureUserIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idParams: number = parseInt(req.params.id);

  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepo.findOne({
    where: {
      id: idParams,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.locals.userId = idParams;

  return next();
};
