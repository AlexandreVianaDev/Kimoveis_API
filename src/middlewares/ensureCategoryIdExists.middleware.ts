import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { Category, User } from "../entities";
import { AppDataSource } from "../data-source";

export const ensureCategoryIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idParams: number = parseInt(req.params.id);

  const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category);

  const category: Category | null = await categoriesRepo.findOne({
    where: {
      id: idParams,
    },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  res.locals.categoryId = idParams;

  return next();
};
