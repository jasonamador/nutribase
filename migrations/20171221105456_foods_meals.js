exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('foods_meals', (table) => {
    table.integer('food_id');
    table.integer('meal_id');
    table.integer('quantity');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('foods_meals');
};
