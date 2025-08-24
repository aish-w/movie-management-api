import express from "express";
import { moviesRouter } from "./movies/movie.routes.js";
import { swaggerSpec, swaggerUi } from "./config/swagger.js";

const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("🎬 Welcome to the Movie Management API. Visit /movies or /docs");
});

// Movies routes
app.use("/movies", moviesRouter);

// Swagger docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
