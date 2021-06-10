
exports.up = function(knex) {
  return knex.schema
    .createTable('zoos', table => {
      
    })
    .createTable('species', table => {
      
    })
    .createTable('animals', table => {
      
    })
    .createTable('zoo_animals', table => {
      
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
