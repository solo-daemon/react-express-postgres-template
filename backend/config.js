const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  serverPort: process.env.SERVER_PORT ,
  dbUser: process.env.DB_USER ,
  dbURI: process.env.DB_URI ,
  dbName: process.env.DB_NAME ,
  dbPassword: process.env.DB_PASSWORD ,
  dbPort: process.env.DB_PORT ,
};