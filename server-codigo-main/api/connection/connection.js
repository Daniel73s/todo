const {Pool} = require('pg');

const configBD = {
    user:'postgres',
    host:'localhost',
    password:'postgres',
    database:'prueva'
 }

const pool = new Pool(configBD);

module.exports = pool;
