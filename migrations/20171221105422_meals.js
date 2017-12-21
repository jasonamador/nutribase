
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('meals', (table)=>{
    table.increments('id');
    table.integer('user_id');
    table.string('label');
    table.timestamp('date_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('meals');
};
