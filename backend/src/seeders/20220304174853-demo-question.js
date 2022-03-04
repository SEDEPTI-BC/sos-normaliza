"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        id: 1,
        title: "Referências",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Sumário",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "Resumo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: "Citação",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title:
          "Estrutura de trabalhos acadêmicos (TCC, TCCE, Dissertação e Tese)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: "Numeração progressiva de seções",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions");
  },
};
