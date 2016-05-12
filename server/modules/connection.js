// connection.js
var pg = require('pg');
var connectionString = '';

if(process.env.DATABASE_URL) {
    pg.defaults.ssl=true;
    connectionString = process.env.DATABASE_URL;
} else {
    connectionString = 'postgres://localhost:5432/passport-users';
}

module.exports = connectionString;
