"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SchedulingQuestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SchedulingQuestions.belongsTo(models.Scheduling);
      SchedulingQuestions.belongsTo(models.Question);
    }
  }
  SchedulingQuestions.init(
    {
      scheduling_id: DataTypes.INTEGER,
      question_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "SchedulingQuestions",
    }
  );
  return SchedulingQuestions;
};
