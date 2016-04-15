var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var pg = require('pg');

var connectionString = '';

if(process.env.DATABASE_URL != undefined){
  connectionString = process.env.DATABASE_URL + 'ssl';
} else {
  connectionString = 'postgres://localhost:5432/passport-users';
}

router.post('/events', function(req, res, next){
  pg.connect(connectionString, function(err, client, done){
    if (err){
      console.log('Error connecting to DB: ', err);
      res.status(500).send(err);
      done();
    } else {
      var start = client.query('CREATE TABLE IF NOT EXISTS events (' +
                                'id SERIAL NOT NULL,' +
                                'date varchar(25) NOT NULL,' +
                                'time varchar(25) NOT NULL,' +
                                'origin varchar(255) NOT NULL,' +
                                'destination varchar(255) NOT NULL,');
    }
  });

});

// Handles request for HTML file
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/routes/events.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {

  var saveEvent = {
    date: req.body.date,
    time: req.body.time,
    origin: req.body.origin,
    destination: req.body.destination
  };
  console.log('new event:', saveEvent);

  pg.connect(connectionString, function(err, client, done) {
    client.query("INSERT INTO events (date, time, origin, destination) VALUES ($1, $2, $3, $4) RETURNING id",
      [saveEvent.date, saveEvent.time, saveEvent.origin, saveEvent.destination],
        function (err, result) {
          client.end();

          if(err) {
            console.log("Error inserting data: ", err);
            next(err);
          } else {
            res.redirect('../views/userpage.html#/user');
          }
        });
  });

});

module.exports = router;
