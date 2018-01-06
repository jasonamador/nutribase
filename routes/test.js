'use strict'
const config = require('../knexfile')[process.env.ENVIRONMENT || 'development'];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('calendar', {user: req.session.user});
})

module.exports = router;
