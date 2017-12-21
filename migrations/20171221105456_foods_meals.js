exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('food_meals', (table) => {
    table.integer('food_id');
    table.integer('meal_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('food_meals');
};
