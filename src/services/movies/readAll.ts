import { Repository } from "typeorm";
import { IMovieQuery, TMovies } from "../../interfaces/movies";
import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";
import { moviesSchema } from "../../schemas/movies";
import { nan } from "zod";

const readAllService = async (
  sort: string | undefined,
  order: string | undefined,
  perPage: number | undefined,
  page: number | undefined
): Promise<IMovieQuery> => {
  const dataRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  let orderOBJ = {};

  switch (order) {
    case undefined:
      order = "asc";
      break;
    case "desc":
      order = "desc";
      break;
    default:
      order = "asc";
  }

  switch (sort) {
    case undefined:
      order = "asc";
      orderOBJ = {
        id: order,
      };
      break;
    case "price":
      orderOBJ = {
        price: order,
      };
      break;
    case "duration":
      orderOBJ = {
        duration: order,
      };
      break;
    default:
      orderOBJ = {
        id: order,
      };
  }

  switch (perPage) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      perPage;
      break;
    default:
      perPage = 5;
  }

  if (page! < 1 || Number.isInteger(page) === false) {
    page = 1;
  }

  // console.log(page, perPage, orderOBJ);

  const movies: Movie[] = await dataRepository.find({
    skip: (page! - 1) * perPage,
    take: perPage,
    order: orderOBJ,
  });

  const returnMovies: TMovies[] = moviesSchema.parse(movies);

  const dataBank: Movie[] = await dataRepository.find();

  let prevPage = null;
  let nextPage = null;

  if (page! > 1 && dataBank.length - returnMovies.length > 0) {
    prevPage = `http://localhost:3000/movies?page=${
      page! - 1
    }&perPage=${perPage}`;
  }

  if (dataBank.length - page! * perPage > 0) {
    nextPage = `http://localhost:3000/movies?page=${
      page! + 1
    }&perPage=${perPage}`;
  }

  return {
    prevPage: prevPage,
    nextPage: nextPage,
    count: dataBank.length,
    data: returnMovies,
  };
};

export default readAllService;
