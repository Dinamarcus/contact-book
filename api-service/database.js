const { Pool } = require('pg');

const pool = new Pool({
  user: 'felix',
  host: 'db',
  database: 'sandbox',
  password: 'pwdformydb',
  port: 5432,
});

module.exports = pool;
