import { Request, Response } from "express";
import { TUserWithoutPassword } from "../interfaces/users.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { getUsersService } from "../services/users/getUsers.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUserWithoutPassword = await createUserService(req.body);
  return res.status(201).json(user);
};

export const getUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: TUserWithoutPassword[] = await getUsersService();
  return res.status(200).json(users);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idParams: number = res.locals.userId;
  const user: TUserWithoutPassword = await updateUserService(
    req.body,
    idParams
  );
  return res.status(200).json(user);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idParams: number = res.locals.userId;
  await deleteUserService(idParams);
  return res.status(204).send();
};
