import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { RealEstate, User } from "../entities";
import { AppDataSource } from "../data-source";

export const ensureRealEstateIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const realEstateId: number = parseInt(req.body.realEstateId);

  const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate | null = await realEstateRepo.findOne({
    where: {
      id: realEstateId,
    },
  });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  res.locals.realEstateId = realEstateId;

  return next();
};
