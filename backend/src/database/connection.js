const database = require('../config/database');

const connection = database
  .authenticate()
  .then(() => console.log(`Connection with database established with success`))
  .catch(e => console.error(`Error during establish connection with database. Log: ${e}`));

module.exports = connection;