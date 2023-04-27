import { Repository } from "typeorm";
import { TMovieReq, TMovies } from "../../interfaces/movies";
import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";
import { movieSchema } from "../../schemas/movies";

const createService = async (data: TMovieReq): Promise<TMovies> => {
  const dataRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie: Movie = dataRepository.create(data);

  await dataRepository.save(movie);

  const returnMovie: TMovies = movieSchema.parse(movie);

  return returnMovie;
};

export default createService;
