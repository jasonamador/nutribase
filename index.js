const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');
const morganBody = require('morgan-body');
const chart = require('chart.js');


// routes
const users = require('./routes/users');
const dashboard = require('./routes/dashboard');

const PORT = process.env.PORT || 8000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());

app.use(session({
  secret: 'supersecret',
}));

let foodRouter = require('./routes/foods');
let testRouter = require('./routes/test');

app.use('/users', users);

// route meals
// route
//food routes
app.use('/foods', foodRouter);
app.use('/test', testRouter);

app.use('/dashboard', dashboard);

app.use('/', (req, res) => {
  if (session.user) {
    res.redirect('/dashboard');
  } else {
    res.redirect('/users/login');
  }
});

app.listen(PORT, () => {
  console.log('listening on ', PORT);
});

//morganBody(app);
