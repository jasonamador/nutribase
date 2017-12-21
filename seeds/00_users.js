exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
          email: 'joe@email.com',
          name: 'joe',
          password: 'abcde',
          sex: 'male',
          age: 25,
          height: 65,
          calories: 2000,
          sugar: 50,
          fat: 25,
          protein: 75,
          carbohydrates: 75,
          fiber: 10,
          bad_fat: 10,
        },
        {
          email: 'bob@email.com',
          name: 'bob',
          password: 'fghijk',
          sex: 'male',
          age: 25,
          height: 65,
          calories: 2010,
          sugar: 50,
          fat: 25,
          protein: 75,
          carbohydrates: 75,
          fiber: 10,
          bad_fat: 10,
        },
        {
          email: 'mary@email.com',
          name: 'mary',
          password: 'lmnopq',
          sex: 'female',
          age: 25,
          height: 65,
          calories: 2000,
          sugar: 50,
          fat: 25,
          protein: 75,
          carbohydrates: 75,
          fiber: 10,
          bad_fat: 10,
        },
      ]);
    });
};
