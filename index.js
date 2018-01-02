const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const morganBody = require('morgan-body');
const chart = require('chart.js');


const PORT = process.env.PORT || 8000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(session({
  secret: 'supersecret',
}));

let foodRouter = require('./routes/foods');
let testRouter = require('./routes/test')

app.use('/users', users);
// route meals
// route
//food routes
app.use('/foods', foodRouter);
app.use('/test', testRouter);

app.listen(PORT, () => {
  console.log('listening on ', PORT);
});

//morganBody(app);
