import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const validateBody =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const body = schema.parse(req.body);

    res.locals.body = body

    return next();
  };
