import { Request, Response } from "express";
import { TUserWithoutPassword } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUserWithoutPassword = await createUserService(req.body);
  return res.status(201).json(user);
};
