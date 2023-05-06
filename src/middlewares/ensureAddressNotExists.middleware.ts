import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address } from "../entities";
import { TAddressCreate } from "../interfaces/addresses.interfaces";

export const ensureAddressNotExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const addressBody: TAddressCreate = req.body.address;

  const addressesRepo: Repository<Address> =
    AppDataSource.getRepository(Address);

  if (!addressBody.number) {
    addressBody.number = "";
  }

  const address: Address | null = await addressesRepo.findOne({
    where: {
      street: addressBody.street,
      zipCode: addressBody.zipCode,
      number: addressBody.number,
      city: addressBody.city,
      state: addressBody.state,
    },
  });

  if (address && addressBody) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};
