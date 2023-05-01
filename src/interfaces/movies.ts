import { z } from "zod";
import {
  movieSchema,
  movieSchemaPart,
  movieSchemaReq,
} from "../schemas/movies";
import { DeepPartial } from "typeorm";

type TMovies = z.infer<typeof movieSchema>;

type TMovieReq = z.infer<typeof movieSchemaReq>;

type TMoviePart = DeepPartial<TMovieReq>;

export { TMovies, TMovieReq, TMoviePart };
