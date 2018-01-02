const config = require('../knexfile')[process.env.ENVIRONMENT || 'development'];
const knex = require('knex')(config);
const bcrypt = require('bcrypt-as-promised');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(bodyParser.urlencoded());

router.get('/', (req, res) => {
  res.render('dashboard');
});


module.exports = router;
