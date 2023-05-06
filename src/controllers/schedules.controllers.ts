import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { createScheduleService } from "../services/schedules/createSchedules.service";
import { getSchedulesService } from "../services/schedules/getSchedules.service";

export const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tokenId: number = res.locals.tokenId;
  const schedule: string = await createScheduleService(req.body, tokenId);
  return res.status(201).json({ message: schedule });
};

export const getSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateId: number = res.locals.realEstateId;
  const schedules: RealEstate | null = await getSchedulesService(realEstateId);
  return res.status(200).json(schedules);
};
