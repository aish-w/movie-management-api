export function up(knex) {
  return knex.schema.createTable("movies", (table) => {
    table.string("id").primary();
    table.string("title").notNullable();
    table.string("director");
    table.integer("release_year");
    table.string("genre");
    table.integer("rating");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("movies");
}
