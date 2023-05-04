import { NextFunction, Response, Request } from "express";
import { ZodTypeAny } from "zod";

export const validateBody =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    schema.parse(req.body);

    return next();
  };
