const config = require('../knexfile')[process.env.ENVIRONMENT || 'development'];
const knex = require('knex')(config);
const bcrypt = require('bcrypt-as-promised');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(bodyParser.urlencoded());

router.get('/', (req, res) => {
  if (req.session.user) {
    knex('meals').where('user_id', req.session.user.id)
    .join('foods_meals', 'meals.id', 'foods_meals.meal_id')
    .leftJoin('foods', 'foods_meals.food_id', 'foods.id')
    .then((meals) => {
      res.send(meals);
    });
  } else {
    res.redirect('/login');
  }
});


module.exports = router;
