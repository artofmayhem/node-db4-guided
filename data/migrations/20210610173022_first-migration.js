
exports.up = function(knex) {
  return knex.schema
    .createTable()
    .createTable()
    .createTable()
    .createTable()
};

exports.down = function(knex) {
  // we drop them in reverse order we created them
  return knex.schema
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
    .dropTableIfExists()
};
