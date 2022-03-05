"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Schedulings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.ENUM,
        values: ["PRESENCIAL", "ONLINE"],
        defaultValue: "PRESENCIAL",
      },
      time_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Time",
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      status: {
        type: Sequelize.ENUM,
        values: ["PENDENTE", "CONFIRMADO", "CANCELADO", "CONCLUIDO"],
        defaultValue: "PENDENTE",
      },
      requester_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      requester_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      appointment_day: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Schedulings");
  },
};
