exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id');
    table.string('email').notNullable();
    table.string('name').defaultTo('User Name');
    table.string('password').notNullable();
    table.timestamp('member_since').defaultTo(knex.fn.now());
    table.timestamp('last_login').defaultTo(knex.fn.now());
    table.integer('calories');
    table.boolean('calorieGoal').defaultTo(false);
    table.integer('sugar');
    table.boolean('sugarGoal').defaultTo(false);
    table.integer('fat');
    table.boolean('fatGoal').defaultTo(false);
    table.integer('protein');
    table.boolean('proteinGoal').defaultTo(false);
    table.integer('carbohydrates');
    table.boolean('carbohydratesGoal').defaultTo(false);
    table.integer('fiber');
    table.boolean('fiberGoal').defaultTo(false);
    table.integer('bad_fat');
    table.boolean('bad_fatGoal').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
