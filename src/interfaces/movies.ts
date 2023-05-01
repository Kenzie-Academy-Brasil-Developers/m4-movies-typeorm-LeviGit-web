import { z } from "zod";
import { movieSchema, movieSchemaReq } from "../schemas/movies";
import { DeepPartial } from "typeorm";

type TMovies = z.infer<typeof movieSchema>;

type TMovieReq = z.infer<typeof movieSchemaReq>;

type TMoviePart = DeepPartial<TMovieReq>;

interface IMovieQuery {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: TMovies[];
}

export { TMovies, TMovieReq, TMoviePart, IMovieQuery };
