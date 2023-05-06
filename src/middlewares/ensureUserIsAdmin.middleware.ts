import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const ensureUserIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const admin: boolean = res.locals.admin;
  const id: number = res.locals.tokenId;

  if (!admin) {
    if (
      req.method === "GET" ||
      req.method === "POST" ||
      req.method === "DELETE"
    ) {
      throw new AppError("Insufficient permission", 403);
    }

    if (req.method === "PATCH") {
      const idParams: number = parseInt(req.params.id);
      if (idParams !== id) {
        throw new AppError("Insufficient permission", 403);
      }

      return next();
    }
  }

  return next();
};
