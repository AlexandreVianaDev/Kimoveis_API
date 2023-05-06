import { Repository } from "typeorm";
import { RealEstate, Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";

export const getSchedulesService = async (
  realEstateId: number
): Promise<Schedule[]> => {
  const schedulesRepo: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const schedules: Schedule[] | null = await schedulesRepo
    .createQueryBuilder("schedules")
    .where("schedules.realEstateId = :realEstateId", {
      realEstateId: realEstateId,
    })
    .getMany();

  return schedules;
};
