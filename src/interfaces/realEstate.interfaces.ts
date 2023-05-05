import { z } from "zod";
import {
  realEstateCreateSchema,
//   realEstateListSchema,
  realEstateSchema,
} from "../schemas/realEstate.schemas";

export type TRealEstate = z.infer<typeof realEstateSchema>;

// export type TRealEstateList = z.infer<typeof realEstateListSchema>;

export type TRealEstateCreate = z.infer<typeof realEstateCreateSchema>;
