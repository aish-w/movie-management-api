import request from "supertest";
import app from "../src/app.js";
import { db } from "../src/db/knex.js";

// Ensure DB is migrated + seeded before tests
beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("Movie API", () => {
  it("GET /movies → should return all movies", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /movies → should create a new movie", async () => {
    const res = await request(app).post("/movies").send({
      title: "Interstellar",
      director: "Christopher Nolan",
      release_year: 2014,
      genre: "Sci-Fi",
      rating: 10,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("Interstellar");
  });

  it("GET /movies/:id → should return a single movie", async () => {
    // First create a movie
    const newMovie = await request(app).post("/movies").send({
      title: "Memento",
      director: "Christopher Nolan",
      release_year: 2000,
      genre: "Thriller",
      rating: 9,
    });

    const res = await request(app).get(`/movies/${newMovie.body.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Memento");
  });

  it("PUT /movies/:id → should update a movie", async () => {
    // Create first
    const movie = await request(app).post("/movies").send({
      title: "Tenet",
      director: "Christopher Nolan",
      release_year: 2020,
      genre: "Sci-Fi",
      rating: 8,
    });

    // Update
    const res = await request(app).put(`/movies/${movie.body.id}`).send({
      rating: 9,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.rating).toBe(9);
  });

  it("DELETE /movies/:id → should delete a movie", async () => {
    const movie = await request(app).post("/movies").send({
      title: "Dunkirk",
      director: "Christopher Nolan",
      release_year: 2017,
      genre: "War",
      rating: 8,
    });

    const res = await request(app).delete(`/movies/${movie.body.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
