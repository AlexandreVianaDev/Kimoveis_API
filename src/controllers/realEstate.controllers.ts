import { Request, Response } from "express";
import { createRealEstateService } from "../services/realEstates/createRealEstate.service";
import { TRealEstate } from "../interfaces/realEstate.interfaces";
import { getRealEstateService } from "../services/realEstates/getRealEstate.service";

export const createRealEstateController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const realEstate: TRealEstate = await createRealEstateService(req.body);
    return res.status(201).json(realEstate);
  };
  
  export const getRealEstatesController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const realEstateList: TRealEstate[] = await getRealEstateService();
    return res.status(200).json(realEstateList);
  };