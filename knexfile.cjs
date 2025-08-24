module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/dev.sqlite",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
  },
};
