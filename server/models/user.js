var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var pg = require('pg');

var connectionString = '';
if(process.env.DATABASE_URL != undefined){
  connectionString = process.env.DATABASE_URL + 'ssl';
} else {
  connectionString = 'postgres://localhost:5432/sassypants_db';
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

module.exports = router;
