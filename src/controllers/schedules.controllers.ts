import { Request, Response } from "express";
import { Schedule } from "../entities";
import { createScheduleService } from "../services/schedules/createSchedules.service";
import { getSchedulesService } from "../services/schedules/getSchedules.service";

export const createSchedulesController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const body = res.locals.body
    const tokenId = res.locals.tokenId
    const schedule: string = await createScheduleService(body, tokenId);
    return res.status(201).json({message: schedule});
  };
  
  export const getSchedulesController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const realEstateId: number = res.locals.realEstateId
    const schedules: Schedule[] = await getSchedulesService(realEstateId);
    return res.status(200).json(schedules);
  };