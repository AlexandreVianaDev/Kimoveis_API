import { z } from "zod";

export const realEstateSchema = z.object({
  id: z.number().int().positive(),
  sold: z.boolean(),
  value: z.string(),
  size: z.number().int(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// export const realEstateListSchema = z.array(realEstateSchema);

export const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});
