const { Client } = require('pg');

const client = new Client({
  user: 'labber',
  host: 'localhost',
  database: 'quotes',
  password: 'labber',
  port: 5432,
});

module.exports = { client };
