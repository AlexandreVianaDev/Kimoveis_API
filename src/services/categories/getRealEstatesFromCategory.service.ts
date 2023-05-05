import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";

export const getRealEstateFromCategoryService = async (
  categoryId: number
): Promise<Category | null> => {
  const categoriesRepo: Repository<Category> =
    AppDataSource.getRepository(Category);

  const realEstateList: Category | null = await categoriesRepo
    .createQueryBuilder("categories")
    .leftJoinAndSelect("categories.realEstate", "realEstate")
    .where("categories.id = :categoryId", { categoryId: categoryId })
    .getOne();

  return realEstateList;
};
