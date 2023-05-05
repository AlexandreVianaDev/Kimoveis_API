import { Request, Response } from "express";
import { createCategoryService } from "../services/categories/createCategory.service";
import { TCategory, TCategoryList } from "../interfaces/categories.interfaces";
import { getCategoriesService } from "../services/categories/getCategories.service";

export const createCategoryController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const category: TCategory = await createCategoryService(req.body);
    return res.status(201).json(category);
  };
  
  export const getCategoriesController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const categories: TCategoryList = await getCategoriesService();
    return res.status(200).json(categories);
  };