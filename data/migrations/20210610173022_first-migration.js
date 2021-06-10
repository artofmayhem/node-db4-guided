
exports.up = function(knex) {
  return knex.schema
    .createTable('zoos', table => {
      table.increments()
    })
    .createTable('species', table => {
      table.increments()
    })
    .createTable('animals', table => {
      table.increments()
    })
    .createTable('zoo_animals', table => {
      table.increments()
    })
};

exports.down = function(knex) {
  // we drop them in reverse order we created them
  return knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
};
