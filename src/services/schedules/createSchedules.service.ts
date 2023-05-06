import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities";

import {
  TScheduleCreate,
  TSchedulesWithUserIdSchema,
} from "../../interfaces/schedules.interfaces";

export const createScheduleService = async (
  payload: TScheduleCreate,
  tokenId: number
): Promise<string> => {
  const schedulesRepo: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const payloadWithUser: TSchedulesWithUserIdSchema = {
    ...payload,
    userId: tokenId,
  };

  const schedule: Schedule = schedulesRepo.create(payloadWithUser!);

  await schedulesRepo.save(schedule);

  return "Schedule created";
};
