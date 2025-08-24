import knex from "knex";
import config from "../../knexfile.cjs";

const env = process.env.NODE_ENV || "development";
export const db = knex(config[env]);
