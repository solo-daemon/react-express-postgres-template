const { dbUser, dbURI, dbName, dbPassword, dbPort } = require('./config')

const Pool = require('pg').Pool
const pool = new Pool({
  user: dbUser,
  host: dbURI,
  database: dbName,
  password: dbPassword,
  port: dbPort,
})

// Create you functions for performing quries to the database .