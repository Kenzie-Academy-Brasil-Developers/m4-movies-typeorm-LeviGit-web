import { Repository } from "typeorm";
import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";

const deleteService = async (id: number): Promise<void> => {
  const dataRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie: Movie | null = await dataRepository.findOneBy({
    id: id,
  });

  await dataRepository.remove(movie!);

  return;
};

export default deleteService;
