exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id');
    table.string('email').notNullable();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.string('sex');
    table.integer('age');
    table.integer('height');
    table.timestamp('member_since').defaultTo(knex.fn.now());
    table.timestamp('last_login').defaultTo(knex.fn.now());
    table.integer('calories');
    table.integer('sugar');
    table.integer('fat');
    table.integer('protein');
    table.integer('carbohydrates');
    table.integer('fiber');
    table.integer('bad_fat');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
