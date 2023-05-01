import { Request, Response } from "express";
import { TMoviePart, TMovieReq } from "../interfaces/movies";
import createService from "../services/movies/create";
import readAllService from "../services/movies/readAll";
import updateService from "../services/movies/update";
import deleteService from "../services/movies/delete";

const createMovies = async (req: Request, res: Response): Promise<Response> => {
  const data: TMovieReq = req.body;

  const newData = await createService(data);

  return res.status(201).json(newData);
};

const readMovies = async (req: Request, res: Response): Promise<Response> => {
  const newData = await readAllService();

  return res.status(200).json(newData);
};

const updateMovies = async (req: Request, res: Response): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const data: TMoviePart = req.body;

  const newData = await updateService(id, data);

  return res.status(200).json(newData);
};

const deleteMovies = async (req: Request, res: Response): Promise<Response> => {
  const id: number = parseInt(req.params.id);

  await deleteService(id);

  return res.status(204).json();
};

export { createMovies, readMovies, updateMovies, deleteMovies };
