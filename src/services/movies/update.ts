import { Repository } from "typeorm";
import { TMovies, TMoviePart } from "../../interfaces/movies";
import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";
import { movieSchema } from "../../schemas/movies";

const updateService = async (
  id: number,
  data: TMoviePart
): Promise<TMovies> => {
  const dataRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const oldMovie: Movie | null = await dataRepository.findOneBy({
    id: id,
  });

  const newMovie: Movie = dataRepository.create({
    ...oldMovie,
    ...data,
  });

  await dataRepository.save(newMovie);

  const returnMovie: TMovies = movieSchema.parse(newMovie);

  return returnMovie;
};

export default updateService;
