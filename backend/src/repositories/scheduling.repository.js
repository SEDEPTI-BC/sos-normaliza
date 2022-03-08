const database = require('../models');
const crypto = require('crypto');
const librarianRotation = require('../services/scheduling/librarianRotation');

function generateToken() {
  const hexToken = crypto.randomBytes(2).toString('Hex');
  return hexToken;
}

class SchedulingRepository {
  /**
   * Método para a criação de um novo agendamento no banco de dados.
   *
   * @param {Objeto de inscrição} data Objeto contendo os dados passados pelo usuário para um agendamento
   * @returns Retornar uma promise e um novo agendamento
   *
   * @author Samantha Luiza Athayde Silva
   */

  static async create(data) {
    const { type, time_id } = data;

    const token = generateToken();

    const chosenLibrarian = await librarianRotation(time_id, type);

    const newSchedulingData = {
      ...data,
      token,
      user_id: chosenLibrarian.id,
      meet_link: chosenLibrarian.meet_link,
    };

    const newScheduling = await database.Scheduling.create(newSchedulingData);
    return newScheduling;
  }

  /**
   * Método para listar todos os agendamentos cadastrados no banco de dados
   *
   * NOTA 1: não utilizar esse método para fins que não envolvam especificamente o usuário administrador
   *
   * @returns Retorna uma promise e um array contendo todos os agendamentos listados no banco de dados
   *
   * @author Samantha Luiza Athayde Silva
   */
  static async getAllSchedulings() {
    const allSchedulings = await database.Scheduling.findAll();
    return allSchedulings;
  }
}

module.exports = SchedulingRepository;
