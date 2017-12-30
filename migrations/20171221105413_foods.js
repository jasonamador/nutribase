
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('foods', (table) =>{
    table.increments('id');
    table.varchar('name');
    table.string('group');
    table.integer('calories');
    table.integer('fat');
    table.integer('sugar');
    table.integer('protein');
    table.integer('carbohydrates');
    table.integer('fiber');
    table.integer('bad_fat');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('foods');
};
