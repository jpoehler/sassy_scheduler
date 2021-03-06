var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

// module with bcrypt functions
var encryptLib = require('../modules/encryption');
var connection = require('../modules/connection');
var pg = require('pg');

// Handles request for HTML file
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/register#.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {

  var saveUser = {
    username: req.body.username,
    password: encryptLib.encryptPassword(req.body.password),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email
  };
  console.log('new user:', saveUser);

  pg.connect(connection, function(err, client, done) {
    client.query("INSERT INTO users (username, password, firstname, lastname, email) VALUES ($1, $2, $3, $4, $5) RETURNING id",
      [saveUser.username, saveUser.password, saveUser.firstname, saveUser.lastname, saveUser.email],
        function (err, result) {
          client.end();

          if(err) {
            console.log("Error inserting data: ", err);
            next(err);
          } else {
            res.redirect('/views/userpage.html#/user');
          }
        });
  });

});


module.exports = router;
