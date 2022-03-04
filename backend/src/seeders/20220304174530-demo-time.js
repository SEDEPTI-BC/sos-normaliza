"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Time", [
      {
        id: 1,
        code: "1M1", // segunda 9:30
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        code: "1M2", // segunda 11:00
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        code: "2M1", // terça 9:30
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        code: "2M2", // terça 11:00
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        code: "3M1", // quarta 9:30
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        code: "3M2", // quarta 11:00
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Time");
  },
};
