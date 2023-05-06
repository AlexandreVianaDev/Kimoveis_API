import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const validateBodyMiddleware =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    req.body = schema.parse(req.body);

    return next();
  };
