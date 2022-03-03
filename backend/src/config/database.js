const { db_name, db_user, db_password, db_host, db_dialect } = require('../config/vars');
const sequelize = require('sequelize');

const database = new sequelize(
  db_name,
  db_user,
  db_password,
  {
    host: db_host,
    dialect: db_dialect,
  },
)

module.exports = database;