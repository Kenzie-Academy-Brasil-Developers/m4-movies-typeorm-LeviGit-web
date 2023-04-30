import { Router } from "express";
import { createMovies, readMovies } from "../controllers/movies";
import validateData from "../middlewares/validateData";
import { movieSchemaReq } from "../schemas/movies";
import validateName from "../middlewares/validateName";

const moviesRouter: Router = Router();

moviesRouter.post("", validateData(movieSchemaReq), validateName, createMovies);
moviesRouter.get("", readMovies);

export default moviesRouter;
