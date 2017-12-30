const bcrypt = require('bcrypt-as-promised');
const salt = 9;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return bcrypt.hash('asdf', salt)
      .then((hpw) => {
        return knex('users').insert([{
            email: 'joe@email.com',
            name: 'joe',
            password: hpw,
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
            password: hpw,
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
            password: hpw,
            calories: 2000,
            sugar: 50,
            fat: 25,
            protein: 75,
            carbohydrates: 75,
            fiber: 10,
            bad_fat: 10,
          },
        ]);
      })
    });
};
