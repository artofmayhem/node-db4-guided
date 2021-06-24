
exports.up = function (knex) {
    //ALWAYS start with tables that contain no foreign keys

  return knex.schema
    .createTable('zoos', table => {
      table.increments('zoo_id')
      table.string('zoo_name', 128).notNullable()
      table.string('address', 256).notNullable().unique()
    })
    .createTable('species', table => {
      table.increments('species_id')
      table.string('species_name', 128).notNullable()
    })
    .createTable('animals', table => {
      table.increments('animal_id')
      table.string('animal_name', 128).notNullable()
      table.integer('species_id')
        .unsigned()
        .notNullable()
        .references('species_id')
        .inTable('species')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT') // NEVER WORRY
    })
    .createTable('zoo_animals', table => {
      table.increments('zoo_animal_id')
      table.integer('zoo_id')
        .unsigned()
        .notNullable()
        .references('zoo_id')
        .inTable('zoos')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT') // NEVER WORRY
      table.integer('animal_id')
        .unsigned()
        .notNullable()
        .references('animal_id')
        .inTable('animals')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT') // NEVER WORRY
    })
};

exports.down = function (knex) {
  // we drop them in reverse order we created them
  return knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos')
};
