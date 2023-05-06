import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";

export const getSchedulesService = async (
  realEstateId: number
): Promise<RealEstate | null> => {
  const realEstateRepo: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate | null = await realEstateRepo
    .createQueryBuilder("realEstate")
    .where("realEstate.id = :realEstateId", {
      realEstateId: realEstateId,
    })
    .leftJoinAndSelect("realEstate.address", "addresses")
    .leftJoinAndSelect("realEstate.schedules", "schedules")
    .leftJoinAndSelect("realEstate.category", "categories")
    .leftJoinAndSelect("schedules.user", "user")
    .getOne();

  return realEstate;
};
