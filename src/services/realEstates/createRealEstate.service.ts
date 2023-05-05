import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { TRealEstate, TRealEstateCreate } from "../../interfaces/realEstate.interfaces";

export const createRealEstateService = async (
  payload: TRealEstateCreate
): Promise<TRealEstate> => {
  const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate = realEstateRepo.create(payload);

  await realEstateRepo.save(realEstate);

  return realEstate;
};
