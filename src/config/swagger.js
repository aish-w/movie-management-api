import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie Management API",
      version: "1.0.0",
      description: "CRUD API for managing movies using Express + SQLite + Knex",
    },
  },
  apis: ["./src/movies/*.routes.js"], // read docs from route files
};

export const swaggerSpec = swaggerJsdoc(options);
export { swaggerUi };
