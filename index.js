const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');
const morganBody = require('morgan-body');
const chart = require('chart.js');
const methodOverride= require('method-override');


const PORT = process.env.PORT || 8000;
const app = express();

//middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUnitialized: true,
  cookie: {
    secure: false
  }
}));

// routes
const users = require('./routes/users');
app.use('/users', users);
const dashboard = require('./routes/dashboard');
app.use('/dashboard', dashboard);
const foods = require('./routes/foods');
app.use('/foods', foods);
const test = require('./routes/test');
app.use('/test', test);
const meals = require('./routes/meals');
app.use('/meals', meals);

app.use('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/dashboard');
  } else {
    res.redirect('/users/login');
  }
});

app.listen(PORT, () => {
  console.log('listening on ', PORT);
});

//morganBody(app);
