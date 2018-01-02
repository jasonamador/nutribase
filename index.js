const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');
const morganBody = require('morgan-body');

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
  resave: false,
  saveUnitialized: true,
  cookie: {
    secure: false
  }
}));

let foodRouter = require('./routes/foods');

app.use('/users', users);

// route meals
// route
//food routes
app.use('/foods', foodRouter);

app.use('/dashboard', dashboard);

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
