
exports.up = function(knex) {
  return knex.schema
    .createTable('zoos', table => {
      table.increments('zoo_id')
      table.string('zoo_name', 138).notNullable().unique()
      table.string('address', 256).notNullable().unique()
    })
    .createTable('species', table => {
      table.increments('species_id')
      table.string('species_name', 138).notNullable()
    })
    .createTable('animals', table => {
      table.increments('animal_id')
      table.string('animal_name', 138).notNullable()
      table.integer('species_id')
        .unsigned()
        .notNullable()
        .references('species_id')
        .inTable('species')
    })
    .createTable('zoo_animals', table => {
      table.increments('zoo_animal_id')
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
