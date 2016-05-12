var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var pg = require('pg');

var connectionString = '';
if(process.env.DATABASE_URL){
  pg.defaults.ssl=true;
  connectionString = process.env.DATABASE_URL;
} else {
  connectionString = 'postgres://localhost:5432/passport-users';
}

router.post('/users', function(req, res, next){
  pg.connect(connectionString, function(err, client, done){
    if (err){
      console.log('Error connecting to DB: ', err);
      res.status(500).send(err);
      done();
    } else {
      var start = client.query('CREATE TABLE IF NOT EXISTS users (' +
                                'id SERIAL NOT NULL,' +
                                'username varchar(25) NOT NULL,' +
                                'password varchar(25) NOT NULL,' +
                                'firstname varchar(255) NOT NULL,' +
                                'lastname varchar(255) NOT NULL,' +
                                'email varchar(255) NOT NULL,' +
                                'CONSTRAINT users_pkey PRIMARY KEY (id))');
    }
  });

});

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
    // check if logged in
    if(req.isAuthenticated()) {
        // send back user object from database
        res.status(status).send(req.user);
    } else {
        // failure best handled on the server. do redirect here.
        res.status(status).send(false);
    }
});

router.get('/events', function(req, res) {
  var date = req.body.date;
  var time = req.body.time;
  var origin = req.body.origin;
  var destination = req.body.destination;

  // connect to DB
  pg.connect(connectionString, function(err, client, done){
    if (err) {
      done();
      console.log('Error connecting to DB: ', err);
      res.status(500).send(err);
    } else {
      var result = [];

      var query = client.query('SELECT * FROM events ORDER BY date ASC');
      query.on('row', function(row){
        result.push(row);
      });

      query.on('end', function() {
        done();
        return res.json(result);
      });

      query.on('error', function(error) {
        console.log('Error running query:', error);
        done();
        res.status(500).send(error);
      });
    }
  });
});

router.get('/*', function(req, res){
var filename = req.params[0] || 'views/userpage.html';
res.sendFile(path.join(__dirname, '../public/', filename));

});

module.exports = router;
