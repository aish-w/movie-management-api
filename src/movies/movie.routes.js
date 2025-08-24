import { Router } from "express";
import { movieService } from "./movie.service.js";

export const moviesRouter = Router();

moviesRouter.get("/", async (req, res) => {
  res.json(await movieService.listMovies());
});

moviesRouter.get("/:id", async (req, res) => {
  try {
    const movie = await movieService.getMovie(req.params.id);
    res.json(movie);
  } catch {
    res.status(404).json({ error: "Movie not found" });
  }
});

moviesRouter.post("/", async (req, res) => {
  const movie = await movieService.createMovie(req.body);
  res.status(201).json(movie);
});

moviesRouter.put("/:id", async (req, res) => {
  const movie = await movieService.updateMovie(req.params.id, req.body);
  res.json(movie);
});

moviesRouter.delete("/:id", async (req, res) => {
  await movieService.deleteMovie(req.params.id);
  res.json({ success: true });
});
