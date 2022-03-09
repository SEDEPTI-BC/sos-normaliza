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
   * @returns Retorna uma promise e um novo agendamento
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

  /**
   * Método para listar um agendamento
   *
   * @param {String} id Identificador do agendamento
   *
   * @returns Retorna uma promise contendo o agendamento especificado pelo id
   *
   * @author Samantha Luiza Athayde Silva
   */
  static async getScheduling(id) {
    const scheduling = await database.Scheduling.findOne({
      where: { id: +id },
    });

    return scheduling;
  }

  /**
   * Método para confirmar um agendamento
   *
   * @param {string} id Indentificador do agendamento
   *
   * @returns Retorna promise do tipo void ou gera um erro
   *
   * @author Samantha Luiza Athayde Silva
   */
  static async confirmScheduling(id) {
    const scheduling = await database.Scheduling.findOne({
      where: { id: +id },
    });

    if (scheduling) {
      await scheduling.update({ status: 'CONFIRMADO' });
      await scheduling.save();
    } else {
      throw new Error('agendamento não encontrado.');
    }
  }

  /**
   * Método para concluir um agendamento por token
   *
   * @param {string} token Token do agendamento
   *
   * @returns Retorna promise do tipo void ou gera um erro
   *
   * @author Samantha Luiza Athayde Silva
   */
  static async finalizeAppointment(token) {
    const appointmentToBeFinalized = await database.Scheduling.findOne({
      where: { token },
    });

    if (appointmentToBeFinalized) {
      await appointmentToBeFinalized.update({ status: 'CONCLUIDO' });
      await appointmentToBeFinalized.save();
    } else {
      throw new Error(
        'não foi possivel encontrar um agendamento com o token informado.'
      );
    }
  }

  /**
   * Método para cancelar um agendamento por id
   *
   * @param {string} id Indentificador do agendamento
   *
   * @returns Retorna promise do tipo void ou gera um erro
   *
   * @author Samantha Luiza Athayde Silva
   */
  static async cancelScheduling(id) {
    const scheduling = await database.Scheduling.findOne({
      where: { id: +id },
    });

    if (!scheduling) {
      throw new Error('agendamento não encontrado.');
    } else if (scheduling.status === 'CONCLUIDO') {
      throw new Error('não é possivel cancelar um agendamento concluido.');
    } else {
      await scheduling.update({ status: 'CANCELADO' });
      await scheduling.save();
    }
  }
}

module.exports = SchedulingRepository;
