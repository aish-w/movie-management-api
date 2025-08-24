import express from "express";
import { moviesRouter } from "./movies/movie.routes.js";

const app = express();
app.use(express.json());
app.use("/movies", moviesRouter);

export default app;
