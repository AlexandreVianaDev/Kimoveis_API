import { Repository } from "typeorm";
import { RealEstate, Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";

export const getSchedulesService = async (): Promise<Schedule[]> => {
  const schedulesRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule);

  const schedules: Schedule[] | null = await schedulesRepo
  .createQueryBuilder("realEstate")
  .leftJoinAndSelect("realEstate.address", "addresses")
  .getMany();

  return schedules;
};
