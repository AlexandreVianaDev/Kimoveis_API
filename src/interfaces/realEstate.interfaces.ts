import { z } from "zod";
import {
  realEstateCompleteSchema,
  realEstateCreateSchema,
//   realEstateListSchema,
  realEstateSchema,
} from "../schemas/realEstate.schemas";
import { DeepPartial } from "typeorm";
import { Address } from "../entities";

export type TRealEstate = z.infer<typeof realEstateSchema>;

export type TRealEstateComplete = z.infer<typeof realEstateCompleteSchema>;

// export type TRealEstateList = z.infer<typeof realEstateListSchema>;

export type TRealEstateCreate = z.infer<typeof realEstateCreateSchema>;

export type TRealEstateCreateDeepPartial = DeepPartial<TRealEstateCreate>

export type TRealEstateDeepPartial = DeepPartial<TRealEstateCreate>