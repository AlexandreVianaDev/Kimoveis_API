import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate, Schedule } from "../../entities";
import {
  TRealEstate,
  TRealEstateCreate,
} from "../../interfaces/realEstate.interfaces";
import { TScheduleCreate, TSchedulesWithUserIdSchema } from "../../interfaces/schedules.interfaces";

export const createScheduleService = async (
  payload: TScheduleCreate, tokenId: number
): Promise<string> => {

console.log("console de criar schedule")

  const schedulesRepo: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const payloadWithUser: TSchedulesWithUserIdSchema = {
    ...payload,
    userId: tokenId
  }

  const schedule: Schedule = schedulesRepo.create(payloadWithUser!);

  await schedulesRepo.save(schedule);

  // const realEstateComplete: RealEstate | null = await realEstateRepo
  //   .createQueryBuilder("realEstate")
  //   .leftJoinAndSelect("realEstate.address", "addresses")
  //   .leftJoinAndSelect("realEstate.category", "categories")
  //   .where("realEstate.id = :realEstateId", {
  //     realEstateId: realEstateSaved.id,
  //   })
  //   .getOne();

  return "Schedule created";
};
