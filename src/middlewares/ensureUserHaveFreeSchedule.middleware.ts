import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { Schedule } from "../entities";
import { AppDataSource } from "../data-source";

export const ensureUserHaveFreeScheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const tokenId: number = res.locals.tokenId;
  const date: Date | string = req.body.date;
  const hour: Date | string = req.body.hour;

  const schedulesRepo: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const userSchedules: Schedule | null = await schedulesRepo
    .createQueryBuilder("schedules")
    .where("schedules.userId = :userId", { userId: tokenId })
    .andWhere("schedules.date = :date", { date: date })
    .andWhere("schedules.hour = :hour", { hour: hour })
    .getOne();

  if (userSchedules) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};
