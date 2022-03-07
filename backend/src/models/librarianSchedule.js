"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LibrarianSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

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
