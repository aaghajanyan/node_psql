const devProd = require('./config');
const Pool = require('pg').Pool;

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const pool = new Pool(devProd[env].db);

module.exports = pool;
