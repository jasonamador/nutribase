exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(() => knex.schema.raw('alter sequence meals_id_seq restart'))
    .then(function() {
      // Inserts seed entries
      return knex('meals').insert([{
          user_id: 1,
          label: 'Breakfast',
        },
        {
          user_id: 1,
          label: 'Lunch',
        },
        {
          user_id: 1,
          label: 'Dinner',
        },
      ]);
    });
};
