// connection.js
var pg = require('pg');
var connectionString = '';

if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/passport-users';
}

client
  .query('SELECT table_schema,table_name FROM information_schema.tables;')
  .on('row', function(row){
    console.log(JSON.stringify(row));
  });

module.exports = connectionString;
