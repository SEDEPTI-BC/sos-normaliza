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
      Scheduling.hasMany(models.SchedulingQuestions);
      Scheduling.belongsTo(models.User);
      Scheduling.belongsTo(models.Time);
    }
  }
  Scheduling.init(
    {
      type: DataTypes.STRING,
      time_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
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
