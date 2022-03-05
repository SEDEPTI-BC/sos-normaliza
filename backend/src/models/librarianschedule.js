"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LibrarianSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LibrarianSchedule.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  LibrarianSchedule.init(
    {
      user_id: DataTypes.INTEGER,
      time_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "LibrarianSchedule",
    }
  );
  return LibrarianSchedule;
};
