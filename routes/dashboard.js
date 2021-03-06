const config = require('../knexfile')[process.env.ENVIRONMENT || 'development'];
const knex = require('knex')(config);
const bcrypt = require('bcrypt-as-promised');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(bodyParser.urlencoded());

router.get('/', (req, res) => {
  let meals = [];
  let mealsPromises = [];
  if (req.session.user) {
    knex('meals').whereRaw(`user_id = ${req.session.user.id} AND date_time::date = now()::date`).orderBy('date_time')
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
        meals.sort((a, b) => a.date_time - b.date_time);
        res.render('dashboard', {meals, user: req.session.user});
      });
    });
  } else {
    res.redirect('/login');
  }
});

router.get('/foods', (req, res) => {
  let groups;
  let foods = {};
  if (req.session.user) {
    knex('foods').select(knex.raw(`distinct "group"`))
    .then((grps) => {
      groups = grps.map((e) => e.group);
    })
    .then(() => {
      knex('foods')
      .then((fds) => {
        fds.forEach((e) => {
          if (!foods[e.group]) {
            foods[e.group] = [];
          }
          foods[e.group].push(e);
        });
        res.send({foods, groups});
      });
    })
  } else {
    res.redirect('/users/login');
  }
});

module.exports = router;
