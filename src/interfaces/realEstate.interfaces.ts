import { z } from "zod";
import {
  realEstateCompleteSchema,
  realEstateCreateSchema,
  realEstateSchema,
} from "../schemas/realEstate.schemas";
import { DeepPartial } from "typeorm";

export type TRealEstate = z.infer<typeof realEstateSchema>;

export type TRealEstateComplete = z.infer<typeof realEstateCompleteSchema>;

export type TRealEstateCreate = z.infer<typeof realEstateCreateSchema>;

export type TRealEstateCreateDeepPartial = DeepPartial<TRealEstateCreate>;

export type TRealEstateDeepPartial = DeepPartial<TRealEstateCreate>;
