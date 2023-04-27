import { Request, Response } from "express";
import { TMovieReq } from "../interfaces/movies";
import createService from "../services/movies/create";
import readAllService from "../services/movies/readAll";

const createMovies = async (req: Request, res: Response): Promise<Response> => {
  const data: TMovieReq = req.body;

  const newData = await createService(data);

  return res.status(201).json(newData);
};

const readMovies = async (req: Request, res: Response): Promise<Response> => {
  const newData = await readAllService();

  return res.status(200).json(newData);
};

export { createMovies, readMovies };
