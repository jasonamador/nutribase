const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(session({
  secret: 'supersecret',
}));

app.listen(PORT, () => {
  console.log('listening on ', PORT);
});
