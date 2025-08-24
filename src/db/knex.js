import knexConfig from "../../knexfile.js";   // instead of .cjs
import knex from "knex";

const env = process.env.NODE_ENV || "development";
export const db = knex(knexConfig[env]);
