var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');

// Handles request for HTML file
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/events.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {

  var saveEvent = {
    date: req.body.date,
    time: req.body.time,
    origin: req.body.origin,
    destination: req.body.destination
  };
  console.log('new user:', saveEvent);

  pg.connect(connection, function(err, client, done) {
    client.query("INSERT INTO events (date, time, origin, destination) VALUES ($1, $2, $3, $4) RETURNING id",
      [saveEvent.date, saveEvent.time, saveEvent.origin, saveEvent.destination],
        function (err, result) {
          client.end();

          if(err) {
            console.log("Error inserting data: ", err);
            next(err);
          } else {
            res.redirect('/');
          }
        });
  });

});


module.exports = router;
