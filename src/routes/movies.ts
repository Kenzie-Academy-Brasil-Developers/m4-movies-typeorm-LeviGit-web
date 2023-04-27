import { Router } from "express";
import { createMovies, readMovies } from "../controllers/movies";
import validateData from "../middlewares/validateData";
import { movieSchemaReq } from "../schemas/movies";

const moviesRouter: Router = Router();

moviesRouter.post("", validateData(movieSchemaReq), createMovies);
moviesRouter.get("", readMovies);

export default moviesRouter;
