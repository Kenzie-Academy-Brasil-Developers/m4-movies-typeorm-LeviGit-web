import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const validateName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const name = req.body.name;
  const dataRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movies: Movie | null = await dataRepository.findOne({
    where: {
      name: name,
    },
  });

  if (movies !== null) {
    throw new AppError("Movie already exists.", 409);
  }

  return next();
};

export default validateName;
