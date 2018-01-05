'use strict'
const config = require('../knexfile')['development'];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();


//get all foods

router.get('/', function(req, res){
  knex('foods')
  .then(function(foods){
    res.render('foods',{
      foods
    });
  })
  .catch(function(error){
    console.error(error);
    res.sendStatus(500);
  });
});

router.get('/:id', (req, res) => {
  knex('foods').where('id', req.params.id).first()
  .then((food) => {
    res.send(food);
  })
  .catch((e) => {
    console.error(e);
    res.sendStatus(500);
  });
});


module.exports = router;
