const config = require('../knexfile')[process.env.ENVIRONMENT || 'development'];
const knex = require('knex')(config);
const bcrypt = require('bcrypt-as-promised');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

// put in environment variable!!
const salt = 9;

router.use(bodyParser.urlencoded());

// login
router.get('/login', (req, res) => {
  if (req.session.user) {
    res.redirect('/profile');
  } else {
    res.render('login-signup');
  }
});

router.post('/login', (req, res) => {
  knex('users').where('email', req.body.loginEmail).first()
  .then((user) => {
    // add something if no user
    bcrypt.compare(req.body.loginPassword, user.password)
    .then(() => {
      req.session.user = user;
      res.redirect('/profile');
    })
    .catch(() => {
      res.redirect('/users/login');
    });
  });
});

// signup
router.post('/signup', (req, res) => {
  // TODO: some validation
  bcrypt.hash(req.body.signupPassword, salt)
  .then((hashedPassword) => {
    let user = {
      email: req.body.signupEmail,
      password: hashedPassword,
    };
    knex('users').returning('*').insert(user)
    .then((newUser) => {
      req.session.user = newUser[0];
      res.redirect('/users/profile/edit');
    });
  })
  .catch((e) => {
    // TODO: something better
    console.error(e);
    res.sendStatus(500);
  });
});

// logout
router.post('/logout', (req, res) => {
  delete req.session.user;
  res.redirect('/users/login');
});
router.get('/logout', (req, res) => {
  delete req.session.user;
  res.redirect('/users/login');
});

// profile
router.get('/profile', (req, res) => {
  if (req.session.user) {
    res.render('profile', req.session.user);
  } else {
    res.redirect('/users/login');
  }
});

router.get('/profile/edit', (req, res) => {
  if (req.session.user) {
    res.render('profile-edit', {user: req.session.user});
  } else {
    res.redirect('/users/login');
  }
});

// update user
router.patch('/profile/', (req, res) => {
  let user = req.body;

  user.caloriesGoal = !!user.caloriesGoal;
  user.fiberGoal = !!user.fiberGoal;
  user.fatGoal = !!user.fatGoal;
  user.bad_fatGoal = !!user.bad_fatGoal;
  user.carbohydratesGoal = !!user.carbohydratesGoal;
  user.sugarGoal = !!user.sugarGoal;
  user.proteinGoal = !!user.proteinGoal;

  knex('users').update(user).where('id', req.session.user.id).returning('*')
  .then((updatedUser) => {
    req.session.user = updatedUser[0];
    res.redirect('/users/dashboard');
  })
  .catch((e) => {
    console.error(e);
    res.sendStatus(500);
  });
});

module.exports = router;
