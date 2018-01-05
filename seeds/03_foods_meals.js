
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods_meals').del()
    .then(function() {
      // Inserts seed entries
      return knex('foods_meals').insert([
        {
          food_id: 2,
          meal_id: 1,
          quantity: 1
        },
        {
          food_id: 20,
          meal_id: 1,
          quantity: 1
        },
        {
          food_id: 36,
          meal_id: 1,
          quantity: 1
        },
        {
          food_id: 64,
          meal_id: 2,
          quantity: 1
        },
        {
          food_id: 70,
          meal_id: 2,
          quantity: 1
        },
        {
          food_id: 75,
          meal_id: 2,
          quantity: 1
        },
        {
          food_id: 86,
          meal_id: 2,
          quantity: 1
        },
        {
          food_id: 106,
          meal_id: 3,
          quantity: 1
        },
        {
          food_id: 73,
          meal_id: 3,
          quantity: 1
        },
        {
          food_id: 5,
          meal_id: 4,
          quantity: 1
        },
        {
          food_id: 27,
          meal_id: 4,
          quantity: 1
        },
        {
          food_id: 20,
          meal_id: 5,
          quantity: 1
        },
        {
          food_id: 40,
          meal_id: 5,
          quantity: 1
        },
        {
          food_id: 99,
          meal_id: 6,
          quantity: 1
        },
        {
          food_id: 101,
          meal_id: 6,
          quantity: 1
        },
        {
          food_id: 34,
          meal_id: 7,
          quantity: 1
        },
        {
          food_id: 20,
          meal_id: 7,
          quantity: 1
        },
        {
          food_id: 34,
          meal_id: 8,
          quantity: 1
        },
        {
          food_id: 87,
          meal_id: 8,
          quantity: 1
        },
        {
          food_id: 90,
          meal_id: 8,
          quantity: 1
        },
        {
          food_id: 45,
          meal_id: 9,
          quantity: 1
        },
        {
          food_id: 50,
          meal_id: 9,
          quantity: 1
        },
        {
          food_id: 15,
          meal_id: 10,
          quantity: 1
        },
        {
          food_id: 62,
          meal_id: 10,
          quantity: 1
        },
        {
          food_id: 85,
          meal_id: 11,
          quantity: 1
        },
        {
          food_id: 101,
          meal_id: 11,
          quantity: 1
        },
        {
          food_id: 77,
          meal_id: 12,
          quantity: 1
        },
        {
          food_id: 86,
          meal_id: 12,
          quantity: 1
        },
        {
          food_id: 95,
          meal_id: 13,
          quantity: 1
        },
        {
          food_id: 103,
          meal_id: 13,
          quantity: 1
        },
        {
          food_id: 18,
          meal_id: 14,
          quantity: 1
        },
        {
          food_id: 16,
          meal_id: 14,
          quantity: 1
        },
        {
          food_id: 71,
          meal_id: 14,
          quantity: 1
        },
      ]);
    });
};
