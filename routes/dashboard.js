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
    .join('foods_meals', 'foods_meals.meal_id', 'meals.id')
    .join('foods', 'foods_meals.food_id', 'foods.id')
    // .whereRaw('date_time > now()::date')
    .then((dbMeals) => {
      let meals = [];
      dbMeals.forEach((food) => {
        if (!meals[food.meal_id]) {
          meals[food.meal_id] = {
            name : food.label,
            time : food.date_time,
            id : food.meal_id,
            foods : [],
          };
        }
        meals[food.meal_id].foods.push(
          {
            name : food.name,
            group : food.group,
            calories : food.calories,
            fat : food.calories,
            sugar : food.sugar,
            protein : food.protein,
            carbs : food.carbohydrates,
            fiber : food.fiber,
            badFat : food.bad_fat,
          });
          console.log(meals);
      });
      res.render('dashboard', {dbMeals});
    });
  } else {
    res.redirect('/login');
  }
});


module.exports = router;
