import { Request, Response } from "express";
import { createRealEstateService } from "../services/realEstates/createRealEstate.service";
import { TRealEstate } from "../interfaces/realEstate.interfaces";
import { getRealEstateService } from "../services/realEstates/getRealEstate.service";
import { RealEstate } from "../entities";

export const createRealEstateController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const body = res.locals.body
    const realEstate = await createRealEstateService(body);
    return res.status(201).json(realEstate);
  };
  
  export const getRealEstatesController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const realEstateList: RealEstate[] = await getRealEstateService();
    return res.status(200).json(realEstateList);
  };