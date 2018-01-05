exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(() => knex.schema.raw('alter sequence meals_id_seq restart'))
    .then(function() {
      // Inserts seed entries
      return knex('meals').insert(
      [
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
    }).then(() => knex.raw(`update meals set date_time = date_time - interval '1 day' where id between 4 and 6`))
    .then(() => knex.raw(`update meals set date_time = date_time - interval '2 days' where id between 7 and 9`))
    .then(() => knex.raw(`update meals set date_time = date_time - interval '3 days' where id between 10 and 12`))
    .then(() => knex.raw(`update meals set date_time = date_time - interval '4 days' where id between 13 and 15`))
    .then(() => knex.raw(`update meals set date_time = date_time - interval '5 days' where id between 16 and 18`))
    .then(() => knex.raw(`update meals set date_time = date_time - interval '6 days' where id between 19 and 21`));
};
