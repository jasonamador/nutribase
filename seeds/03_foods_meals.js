
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods_meals').del()
    .then(function() {
      // Inserts seed entries
      return knex('foods_meals').insert([

      ]);
    });
};
