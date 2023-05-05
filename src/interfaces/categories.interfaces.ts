import { z } from "zod";
import {
  categoryCreateSchema,
  categoryListSchema,
  categorySchema,
} from "../schemas/categories.schemas";

export type TCategory = z.infer<typeof categorySchema>;

export type TCategoryList = z.infer<typeof categoryListSchema>;

export type TCategoryCreate = z.infer<typeof categoryCreateSchema>;
