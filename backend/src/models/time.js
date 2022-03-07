"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Time extends Model {
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
