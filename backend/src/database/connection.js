const database = require('../config/database');

const connection = database
  .authenticate();

module.exports = connection;