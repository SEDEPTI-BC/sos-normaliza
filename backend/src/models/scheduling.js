"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Scheduling extends Model {
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
