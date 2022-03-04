const database = require('../config/database');
const sequelize = requiere('sequelize');

const Time = database.define('time', {
  // 
})

Time.sync({ force: false, });

module.exports = Time;