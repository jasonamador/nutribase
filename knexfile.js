// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'nutribase',
			host: 'localhost'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    host: 'ec2-107-22-183-40.compute-1.amazonaws.com',
    client: 'postgresql',
    connection: {
      database: 'd354s1qfapm5m8',
      user:     'afaqeruhaviicl',
      password: '6b60c3362688c4108cb50c9803db7348f2d14386962884a96055f19bf069ffe4'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
