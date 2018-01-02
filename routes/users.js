const config = require('../knexfile')[process.env.ENVIRONMENT || 'development'];
const knex = require('knex')(config);
const bcrypt = require('bcrypt-as-promised');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const session = require('express-session');

// put in environment variable!!
const salt = 9;

router.use(bodyParser.urlencoded());

// login
router.get('/login', (req, res) => {
  res.render('login-signup', {});
});

router.post('/login', (req, res) => {
  knex('users').where('email', req.body.loginEmail).first()
  .then((user) => {
    bcrypt.compare(req.body.loginPassword, user.password)
    .then(() => {
      session.user = user;
      res.send(session.user);
    })
    .catch(() => {
      res.redirect('/users/login');
    });
  });
});

// signup
router.post('/signup', (req, res) => {
  // TODO: some validation
  bcrypt.hash(req.body.password, salt)
  .then((hashedPassword) => {
    let user = {
      email: req.body.email,
      password: hashedPassword,
    };
    knex('users').insert(user)
    .then((user) => {
      session.user = user;
      res.redirect('/users/profile');
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
  delete session.user;
  res.redirect('/users/login');
});

// profile
router.get('/profile', (req, res) => {
  res.send('profile');

});

module.exports = router;
