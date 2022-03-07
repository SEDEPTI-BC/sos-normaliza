"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Método para auxiliar na definição de associações entre tableas do banco de dados
     * Esse método não é parte do ciclo de vida do Sequelize
     * O ficheiro `models/index.js` irá chamar esse método automaticamente no momento da sua instância
     * 
     * @param {Modelos das tabelas do banco de dados} models Dados passados como referências aos modelos das tabelas no banco de dados
     * 
     * @author Samantha Luiza Athayde Silva
     */
    static associate (models) {
      // define association here
      User.hasMany(models.Scheduling, {
        foreignKey: "user_id",
      });
      User.hasMany(models.LibrarianSchedule, {
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM("ADMIN", "LIBRARIAN"),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
