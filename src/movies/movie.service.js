import { v4 as uuid } from "uuid";
import { movieDao } from "./movie.dao.js";

export const movieService = {
  async listMovies() {
    return movieDao.list();
  },
  async getMovie(id) {
    const movie = await movieDao.getById(id);
    if (!movie) throw new Error("Movie not found");
    return movie;
  },
  async createMovie(data) {
    const now = new Date().toISOString();
    const movie = {
      id: uuid(),
      title: data.title,
      director: data.director || null,
      release_year: data.release_year || null,
      genre: data.genre || null,
      rating: data.rating || null,
      created_at: now,
      updated_at: now,
    };
    return movieDao.create(movie);
  },
  async updateMovie(id, data) {
    return movieDao.update(id, { ...data, updated_at: new Date().toISOString() });
  },
  async deleteMovie(id) {
    return movieDao.remove(id);
  },
};
