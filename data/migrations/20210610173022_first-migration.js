
exports.up = function(knex) {
  return knex.schema
    .createTable('zoos')
    .createTable('species')
    .createTable('animals')
    .createTable('zoo_animals')
};

exports.down = function(knex) {
  // we drop them in reverse order we created them
  return knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
};
