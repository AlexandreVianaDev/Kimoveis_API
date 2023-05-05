import { z } from "zod";
import {
  addressCreateSchema,
  addressSchema,
} from "../schemas/addresses.schemas";

export type TAddress = z.infer<typeof addressSchema>;

export type TAddressCreate = z.infer<typeof addressCreateSchema>;
