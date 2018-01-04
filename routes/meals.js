const config = require('../knexfile')[process.env.ENVIRONMENT || 'development'];
const knex = require('knex')(config);
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

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

router.get('/today', (req, res) => {
  let meals = [];
  let mealsPromises = [];
  if (req.session.user) {
    knex('meals').where('user_id', req.session.user.id)
    .then((dbMeals) => {
      dbMeals.forEach((meal) => {
        mealsPromises.push(knex('foods').join('foods_meals', 'foods_meals.food_id', 'foods.id').where('foods_meals.meal_id', meal.id)
        .then((foods) => {
          meal.foods = foods;
          meals.push(meal);
        }));
      });
    }).then(() => {
      Promise.all(mealsPromises).then(() => {

        res.send(meals);
      });
    });
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
