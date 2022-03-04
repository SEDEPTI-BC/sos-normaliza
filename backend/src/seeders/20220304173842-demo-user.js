"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "João Silva",
        email: "joao@email.com",
        role: "LIBRARIAN",
        password:
          "$2a$12$57w5z88EmqZsDh/W.NycgOIH9dXFCl6y6vfTrkQEyYq6/uoKPLB1i", // joao1234 bcrypt12r
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Ana Souza",
        email: "anasouza@email.com",
        role: "LIBRARIAN",
        password:
          "$2a$12$IqkO2ysZ92UomhObET0BkOkMnGUJfFeV/jYHhFnpWiS/.uBxDf5v6", // anasouza1234
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Matheus Begot",
        email: "matheus@email.com",
        role: "LIBRARIAN",
        password:
          "$2a$12$fmG3KrKhXU.EoFQ9NyjfcOl1l7dQ1Zvy4fkxT8o9nj8e4M1l5yylS", // matheus1234
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Clara Tavares",
        email: "clara@email.com",
        password:
          "$2a$12$mtoAGr9GtZVbEbSBjVYtbOPzoawKrMfD6aCN.ef4ydzR.z9zsBXgy", // clara1234
        role: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users");
  },
};
