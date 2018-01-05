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

router.get('/graph/:date', (req, res) => {
  let meals = [];
  let mealsPromises = [];
  if (req.session.user) {
    knex('meals').whereRaw(`user_id = ${req.session.user.id} AND date_time::date = to_date('${req.params.date}', 'DDMMYYYY')`)
    .then((dbMeals) => {
      dbMeals.forEach((meal) => {
        mealsPromises.push(knex('foods').join('foods_meals', 'foods_meals.food_id', 'foods.id').where('foods_meals.meal_id', meal.id)
        .then((foods) => {
          meal.foods = foods;
          meals.push(meal);
        }));
      });
    })
    .then(() => {
      Promise.all(mealsPromises).then(() => {
        let totals = {
          calories: 0,
          fat: 0,
          badFat: 0,
          sugar: 0,
          protein: 0,
          fiber: 0,
          carbohydrates: 0,
        };
        meals.forEach((meal) => {
          meal.foods.forEach((food) => {
            totals.calories += food.calories;
            totals.fat += food.fat;
            totals.badFat += food.bad_fat;
            totals.sugar += food.sugar;
            totals.protein += food.protein;
            totals.fiber += food.fiber;
            totals.carbohydrates += food.carbohydrates;
          });
        });
        res.send({totals, user: req.session.user});
      });
    });
  } else {
    res.sendStatus(500);
  }
});

router.get('/graph/:from/:to', (req, res) => {
  let meals = [];
  let mealsPromises = [];

  // temp for testing
  req.session.user = {};
  req.session.user.id = 1;
  if (req.session.user) {
    knex('meals').select(knex.raw(`label, id, date_time`)).whereRaw(`user_id = ${req.session.user.id} AND date_time > to_date('${req.params.from}', 'DDMMYYYY') AND date_time < to_date('${req.params.to}', 'DDMMYYYY') + 1 ORDER BY date_time`)
    .then((dbMeals) => {
      dbMeals.forEach((meal) => {
        mealsPromises.push(knex('foods').join('foods_meals', 'foods_meals.food_id', 'foods.id').where('foods_meals.meal_id', meal.id)
        .then((foods) => {
          meal.foods = foods;
          meals.push(meal);
        }));
      });
    })
    .then(() => {
      Promise.all(mealsPromises).then(() => {
        let totals = {
          calories: 0,
          fat: 0,
          badFat: 0,
          sugar: 0,
          protein: 0,
          fiber: 0,
          carbohydrates: 0,
        };
        meals.forEach((meal) => {
          meal.foods.forEach((food) => {
            totals.calories += food.calories;
            totals.fat += food.fat;
            totals.badFat += food.bad_fat;
            totals.sugar += food.sugar;
            totals.protein += food.protein;
            totals.fiber += food.fiber;
            totals.carbohydrates += food.carbohydrates;
          });
        });
        res.send(meals);
      });
    });
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
