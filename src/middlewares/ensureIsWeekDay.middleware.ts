import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const ensureIsWeekDayMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const date: Date = new Date(req.body.date);

  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  return next();
};
