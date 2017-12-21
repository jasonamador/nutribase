exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(function() {
      // Inserts seed entries
      return knex('meals').insert([{
          user_id: 1,
          label: 'lunch',
        },
        {
          user_id: 2,
          label: 'dinner',
        },
        {
          user_id: 3,
          label: 'snack',
        },
      ]);
    });
};
