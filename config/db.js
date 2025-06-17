require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DBUser,
    password: process.env.DBPass,
    database: process.env.DBName,
    host: process.env.DBHost,
    port: process.env.DBPort,
    dialect: process.env.DBDialect
  },
  production: {
    username: process.env.DBUser,
    password: process.env.DBPass,
    database: process.env.DBName,
    host: process.env.DBHost,
    port: process.env.DBPort,
    dialect: process.env.DBDialect
  }
};
