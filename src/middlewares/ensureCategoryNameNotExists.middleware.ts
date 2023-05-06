import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";

export const ensureCategoryNameNotExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const nameBody: string = req.body.name;

  const categoriesRepo: Repository<Category> =
    AppDataSource.getRepository(Category);

  const user: Category | null = await categoriesRepo.findOne({
    where: {
      name: nameBody,
    },
  });

  if (user && nameBody) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};
