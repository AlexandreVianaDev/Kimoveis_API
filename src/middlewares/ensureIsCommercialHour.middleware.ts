import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const ensureIsCommercialHour = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const hourBody: string = req.body.hour
  const hour: number  = parseInt(hourBody.substring(0, 2))

  if (hour < 8 || hour > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  return next();
};


// return {message: "Invalid date, work days are monday to friday"}