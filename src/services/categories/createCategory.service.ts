import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
  TCategory,
  TCategoryCreate,
} from "../../interfaces/categories.interfaces";

export const createCategoryService = async (
  payload: TCategoryCreate
): Promise<TCategory> => {
  const categoriesRepo: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoriesRepo.create(payload);

  await categoriesRepo.save(category);

  return category;
};
