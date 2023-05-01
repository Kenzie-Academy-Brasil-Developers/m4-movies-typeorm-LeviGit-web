import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const validateID = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  const dataRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movies: Movie | null = await dataRepository.findOne({
    where: {
      id: id,
    },
  });

  if (movies === null) {
    throw new AppError("Movie not found", 404);
  }

  return next();
};

export default validateID;
