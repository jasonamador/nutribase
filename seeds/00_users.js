const bcrypt = require('bcrypt-as-promised');
const salt = 9;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => knex.schema.raw('alter sequence users_id_seq restart'))
    .then(function() {
      // Inserts seed entries
      return bcrypt.hash('asdf', salt)
      .then((hashedPassword) => {
        return knex('users').insert([{
            email: 'joe@email.com',
            name: 'joe',
            password: hashedPassword,
          },
          {
            email: 'bob@email.com',
            name: 'bob',
            password: hashedPassword,
          },
          {
            email: 'mary@email.com',
            name: 'mary',
            password: hashedPassword,
          },
        ]);
      })
    });
};
