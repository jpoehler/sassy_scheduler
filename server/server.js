var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

var passport = require('./strategies/user.js');
var session = require('express-session');

var index = require('./models/index');
var user = require('./models/user');
var register = require('./models/register');
var events = require('./models/events');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: 'secret',
  key: 'user',
  resave: 'true',
  s: 'false',
  cookie: {maxAge: 60000, secure: false}
}));

app.use('/register', register);
app.use('/user', user);
app.use('/events', events);
app.use('/', index);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
  console.log('Listening on port: ', app.get('port'));
});

module.exports = app;
