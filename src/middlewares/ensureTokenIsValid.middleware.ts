import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../error";

export const ensureTokenIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const tokenFromReq: string | undefined = req.headers["authorization"];

  if (!tokenFromReq) {
    throw new AppError("Missing bearer token", 401);
  }

  const token: string = tokenFromReq.split(" ")[1];

  verify(token, String(process.env.SECRET_KEY), (error: any, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    res.locals.tokenId = parseInt(decoded.sub);

    res.locals.admin = decoded.admin;
  });

  return next();
};
