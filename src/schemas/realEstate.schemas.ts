import { nullable, z } from "zod";
import { addressCreateSchema, addressSchema } from "./addresses.schemas";
import { Address } from "../entities";
import { categorySchema } from "./categories.schemas";
import { dateSchema } from "./users.schemas";

const valueSchema = z.union([z.string(), z.number()]);

export const realEstateSchema = z.object({
  id: z.number().int().positive(),
  sold: z.boolean().nullish(),
  value: valueSchema,
  size: z.number().int().positive(),
  createdAt: dateSchema,
  updatedAt: dateSchema,
});

// export const realEstateListSchema = z.array(realEstateSchema);

export const realEstateCreateSchema = realEstateSchema
  .omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
  })
  .extend({
    address: addressCreateSchema,
    categoryId: z.number().int(),
  });

export const realEstateCompleteSchema = realEstateSchema.extend({
  address: addressSchema,
  category: categorySchema,
});
