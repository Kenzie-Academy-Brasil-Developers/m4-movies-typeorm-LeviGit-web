import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validateData =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.parse(req.body);

    req.body = validation;

    return next();
  };

export default validateData;
