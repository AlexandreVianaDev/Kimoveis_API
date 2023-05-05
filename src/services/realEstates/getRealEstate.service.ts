import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TRealEstate } from "../../interfaces/realEstate.interfaces";

export const getRealEstateService = async (): Promise<TRealEstate[]> => {
  const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

  const realEstateList: RealEstate[] | null = await realEstateRepo.find();

  return realEstateList;
};
