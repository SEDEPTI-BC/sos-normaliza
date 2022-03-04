"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("SchedulingQuestions", [
      {
        id: 1,
        scheduling_id: 1,
        question_id: 1, // referências
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        scheduling_id: 1,
        question_id: 2, // sumário
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("SchedulingQuestions");
  },
};
