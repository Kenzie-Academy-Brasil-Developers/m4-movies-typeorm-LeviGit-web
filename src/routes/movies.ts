import { Router } from "express";
import {
  createMovies,
  deleteMovies,
  readMovies,
  updateMovies,
} from "../controllers/movies";
import validateData from "../middlewares/validateData";
import { movieSchemaPart, movieSchemaReq } from "../schemas/movies";
import validateName from "../middlewares/validateName";
import validateID from "../middlewares/validateID";

const moviesRouter: Router = Router();

moviesRouter.post("", validateData(movieSchemaReq), validateName, createMovies);
moviesRouter.get("", readMovies);
moviesRouter.patch(
  "/:id",
  validateID,
  validateData(movieSchemaPart),
  validateName,
  updateMovies
);
moviesRouter.delete("/:id", validateID, deleteMovies);

export default moviesRouter;
