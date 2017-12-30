const config = require('../knexfile')[process.env.ENVIRONMENT || 'development'];
const knex = require('knex')(config);
const bcrypt = require('bcrypt-as-promised');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(bodyParser.urlencoded());

// login
router.get('/login', (req, res) => {
  res.render('login-signup', {});
});

router.post('/login', (req, res) => {
  knex('users').where('email', req.body.email).first()
  .then((user) => {
    bcrypt.compare(req.body.password, user.password)
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
<<<<<<< HEAD
=======
router.get('/signup', (req, res) => {
  res.render('login', {});
});

>>>>>>> jason
router.post('/signup', (req, res) => {
  res.send(req.body);
});

// logout
router.post('/logout', (req, res) => {
  delete session.user;
  res.redirect('/users/login');
});

// profile

module.exports = router;
