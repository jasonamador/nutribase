
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods_meals').del()
    .then(function() {
      // Inserts seed entries
      return knex('foods_meals').insert([
        {
          food_id: 2,
          meal_id: 19,
          quantity: 1
        },
        {
          food_id: 20,
          meal_id: 19,
          quantity: 1
        },
        {
          food_id: 36,
          meal_id: 19,
          quantity: 1
        },
        {
          food_id: 64,
          meal_id: 20,
          quantity: 1
        },
        {
          food_id: 70,
          meal_id: 20,
          quantity: 1
        },
        {
          food_id: 75,
          meal_id: 20,
          quantity: 1
        },
        {
          food_id: 86,
          meal_id: 21,
          quantity: 1
        },
        {
          food_id: 106,
          meal_id: 21,
          quantity: 1
        },
        {
          food_id: 73,
          meal_id: 21,
          quantity: 1
        },
      ]);
    });
};
