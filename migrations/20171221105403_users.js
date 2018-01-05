exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id');
    table.string('email').notNullable();
    table.string('name').defaultTo('User Name');
    table.string('password').notNullable();
    table.timestamp('member_since').defaultTo(knex.fn.now());
    table.timestamp('last_login').defaultTo(knex.fn.now());
    table.integer('calories').defaultTo(2000);
    table.boolean('caloriesGoal').defaultTo(false);
    table.integer('sugar').defaultTo(35);
    table.boolean('sugarGoal').defaultTo(false);
    table.integer('fat').defaultTo(65);
    table.boolean('fatGoal').defaultTo(false);
    table.integer('protein').defaultTo(50);
    table.boolean('proteinGoal').defaultTo(true);
    table.integer('carbohydrates').defaultTo(300);
    table.boolean('carbohydratesGoal').defaultTo(false);
    table.integer('fiber').defaultTo(25);
    table.boolean('fiberGoal').defaultTo(true);
    table.integer('bad_fat').defaultTo(20);
    table.boolean('bad_fatGoal').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
