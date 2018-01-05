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
    })
    .then(() => knex.raw(`update meals set date_time = date_time - interval '7 days'`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 1 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 2 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 3 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 4 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 5 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 6 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 7 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 8 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 9 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 10 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 11 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 12 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 13 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 14 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 15 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 16 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 17 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 18 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 19 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 20 and 21`))
    .then(() => knex.raw(`update meals set date_time = date_time + interval '8 hours' where id between 21 and 21`))
};
