export async function seed(knex) {
  await knex("movies").del();
  await knex("movies").insert([
    {
      id: "1",
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      release_year: 1994,
      genre: "Drama",
      rating: 10,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Inception",
      director: "Christopher Nolan",
      release_year: 2010,
      genre: "Sci-Fi",
      rating: 9,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
