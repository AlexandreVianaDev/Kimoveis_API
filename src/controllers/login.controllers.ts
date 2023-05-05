import { Request, Response } from "express";
import { IToken } from "../interfaces/users.interfaces";
import { loginUserService } from "../services/users/loginUser.service";

export const loginUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const token: IToken = await loginUserService(req.body);
    return res.status(200).json(token);
  };