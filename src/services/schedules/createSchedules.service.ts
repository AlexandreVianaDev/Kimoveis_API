import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate, Schedule } from "../../entities";
import {
  TRealEstate,
  TRealEstateCreate,
} from "../../interfaces/realEstate.interfaces";
import { TScheduleCreate } from "../../interfaces/schedules.interfaces";

export const createScheduleService = async (
  payload: TScheduleCreate
): Promise<void> => {

console.log("console de criar schedule")

//   const realEstateRepo: Repository<RealEstate> =
//     AppDataSource.getRepository(RealEstate);

//   const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);

//   const addressData = payload.address;

//   const address: Address = addressRepo.create(addressData!);

//   await addressRepo.save(address);

//   const categoryRepo: Repository<Category> =
//     AppDataSource.getRepository(Category);

//   const category: Category | null = await categoryRepo.findOneBy({
//     id: payload.categoryId,
//   });

//   console.log(payload);

//   const payloadWithAddressCreated = {
//     ...payload,
//     address: address,
//     category: category!,
//   };

//   const realEstate: TRealEstate = realEstateRepo.create(
//     payloadWithAddressCreated
//   );

//   const realEstateSaved = await realEstateRepo.save(realEstate);

//   const realEstateComplete: RealEstate | null = await realEstateRepo
//     .createQueryBuilder("realEstate")
//     .leftJoinAndSelect("realEstate.address", "addresses")
//     .leftJoinAndSelect("realEstate.category", "categories")
//     .where("realEstate.id = :realEstateId", {
//       realEstateId: realEstateSaved.id,
//     })
//     .getOne();

//   return realEstateComplete;
};
