"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Time.hasMany(models.Scheduling, {
        foreignKey: "time_id",
      });
      Time.hasMany(models.LibrarianSchedule, {
        foreignKey: "time_id",
      });
    }
  }
  Time.init(
    {
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Time",
    }
  );
  return Time;
};
