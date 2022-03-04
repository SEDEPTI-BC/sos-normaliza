const database = require('../config/database');
const sequelize = require('sequelize');

const Doubts = database.define('doubts', {
  title: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

Doubts.sync({ force: false, });

module.exports = Doubts;

