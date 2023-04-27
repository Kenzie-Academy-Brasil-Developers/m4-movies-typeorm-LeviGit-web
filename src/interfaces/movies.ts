import { z } from "zod";
import { movieSchema, movieSchemaReq } from "../schemas/movies";

type TMovies = z.infer<typeof movieSchema>;

type TMovieReq = z.infer<typeof movieSchemaReq>;

export { TMovies, TMovieReq };
