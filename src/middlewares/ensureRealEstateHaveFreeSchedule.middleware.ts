import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { Schedule } from "../entities";
import { AppDataSource } from "../data-source";

export const ensureRealEstateHaveFreeScheduleExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const realEstateId: number = req.body.realEstateId;
  const date: Date | string = req.body.date;
  const hour: Date | string = req.body.hour;

  const schedulesRepo: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const userSchedules: Schedule | null = await schedulesRepo
    .createQueryBuilder("schedules")
    .where("schedules.realEstateId = :realEstateId", {
      realEstateId: realEstateId,
    })
    .andWhere("schedules.date = :date", { date: date })
    .andWhere("schedules.hour = :hour", { hour: hour })
    .getOne();

  if (userSchedules) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};
