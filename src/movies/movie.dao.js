import { db } from "../db/knex.js";

export const movieDao = {
  async list() {
    return db("movies").select("*");
  },
  async getById(id) {
    return db("movies").where({ id }).first();
  },
  async create(movie) {
    await db("movies").insert(movie);
    return movie;
  },
  async update(id, patch) {
    await db("movies").where({ id }).update(patch);
    return this.getById(id);
  },
  async remove(id) {
    return db("movies").where({ id }).del();
  },
};
