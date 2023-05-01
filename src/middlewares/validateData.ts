import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { AppError } from "../error";

const validateData =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.parse(req.body);

    req.body = validation;
    if(Object.keys(req.body).length === 0){
      throw new AppError("Expected valid body", 400)
    }

    return next();
  };

export default validateData;
