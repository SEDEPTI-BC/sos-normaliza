"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("LibrarianSchedules", [
      {
        id: 1,
        user_id: 1, // joao
        time_id: 1, // seg 9h30
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        user_id: 1, // joao
        time_id: 3, // ter 9h30
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        user_id: 2, // ana
        time_id: 1, // seg 9h30
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        user_id: 2, // ana
        time_id: 4, // ter 11h
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        user_id: 3, // matheus
        time_id: 1, // seg 9h30
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        user_id: 3, // matheus
        time_id: 4, // ter 11h
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("LibrarianSchedules");
  },
};
