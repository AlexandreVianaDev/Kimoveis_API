import { Request, Response } from "express";
import { Schedule } from "../entities";
import { createScheduleService } from "../services/schedules/createSchedules.service";
import { getSchedulesService } from "../services/schedules/getSchedules.service";

export const createSchedulesController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const body = res.locals.body
    const schedule: void = await createScheduleService(body);
    return res.status(201).json(schedule);
  };
  
  export const getSchedulesController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const schedules: Schedule[] = await getSchedulesService();
    return res.status(200).json(schedules);
  };