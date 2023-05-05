import { Request, Response } from "express";
import { IToken, TUserWithoutPassword } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { loginUserService } from "../services/users/loginUser.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUserWithoutPassword = await createUserService(req.body);
  return res.status(201).json(user);
};

export const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: IToken = await loginUserService(req.body);
  return res.status(200).json(token);
};
