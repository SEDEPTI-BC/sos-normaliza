const database = require('../config/database');
const DoubtsModel = require('../models/doubts.model');

class Connection {
  async connect () {
    try {
      await database.authenticate();
      await console.log(`Connection with database established with success`);
    } catch (e) {
      console.error(`Error during establish connection with database. Log: ${e}`)
    }
  } 
  
  async sync () {
    try {
      await console.log(`All tables in databases has been sync`);
    } catch (e) {
      console.error(`Could not sync database tables; Log: ${e}`);
    }
  }
}

module.exports = new Connection;