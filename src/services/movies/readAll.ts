import { Repository } from "typeorm";
import { TMovies } from "../../interfaces/movies";
import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";
import { moviesSchema } from "../../schemas/movies";

const readAllService = async (): Promise<TMovies[]> => {
  const dataRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movies: Movie[] = await dataRepository.find();

  const returnMovies: TMovies[] = moviesSchema.parse(movies);

  return returnMovies;
};

export default readAllService;
