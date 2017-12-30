const config = require('../knexfile')[process.env.ENVIRONMENT || 'development'];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(bodyParser.urlencoded());

router.get('/', (req, res) => {
  let meal;
  knex('meals').where('user_id', 1).first()
  .then((m) => {
    meal = m;
  })
  .then(() => {
  });
});
