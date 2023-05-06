import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import { AppDataSource } from "../data-source";

export const ensureRealEstateIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let realEstateId: number = 0;

  if (req.method === "POST") {
    realEstateId = parseInt(req.body.realEstateId);
  }

  if (req.method === "GET") {
    realEstateId = parseInt(req.params.id);
  }

  const realEstateRepo: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

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
