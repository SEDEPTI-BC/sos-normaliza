"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Scheduling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Scheduling.hasMany(models.SchedulingQuestions, {
        foreignKey: "scheduling_id",
      });
      Scheduling.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      Scheduling.belongsTo(models.Time, {
        foreignKey: "time_id",
      });
    }
  }
  Scheduling.init(
    {
      type: DataTypes.ENUM("PRESENCIAL", "ONLINE"),
      time_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      status: DataTypes.ENUM(
        "PENDENTE",
        "CONFIRMADO",
        "CANCELADO",
        "CONCLUIDO"
      ),
      requester_name: DataTypes.STRING,
      requester_email: DataTypes.STRING,
      appointment_day: DataTypes.DATEONLY,
      token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Scheduling",
    }
  );
  return Scheduling;
};
