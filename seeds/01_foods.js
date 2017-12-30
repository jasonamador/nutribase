exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function() {
      // Inserts seed entries
      return knex('foods').insert([{
          name: 'pie',
          calories: 2000,
          fat: 25,
          sugar: 50,
          protein: 75,
          carbohydrates: 75,
          fiber: 10,
          bad_fat: 10,
        },
        {
          name: 'apple',
          calories: 2000,
          fat: 25,
          sugar: 50,
          protein: 75,
          carbohydrates: 75,
          fiber: 10,
          bad_fat: 10,
        },
        {
          name: 'donut',
          calories: 2000,
          fat: 25,
          sugar: 50,
          protein: 75,
          carbohydrates: 75,
          fiber: 10,
          bad_fat: 10,
        },
      ]);
    });
};
