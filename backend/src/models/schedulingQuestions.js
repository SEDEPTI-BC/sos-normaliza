"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SchedulingQuestions extends Model {
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
      SchedulingQuestions.belongsTo(models.Scheduling, {
        foreignKey: "scheduling_id",
      });
      SchedulingQuestions.belongsTo(models.Question, {
        foreignKey: "question_id",
      });
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
