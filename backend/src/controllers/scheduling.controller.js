const SchedulingRepository = require('../repositories/scheduling.repository');

class SchedulingController {
  /**
   * Método responsável por criar um novo agendamento no banco de dados
   *
   * @param {Objeto da requisição} req Dados obtidos pela requisição do cliente
   * @param {Objeto da resposta} res Dados a serem retornados pelo servidor
   * @param {Objeto da solicitação do middleware} next Controla as solicitações dos pŕoximos middlewares da cadeia
   * @returns Retorna a criação ou não de um novo agendamento, o status HTTP da requisição e um JSON com o estado da requisição
   *
   * @author Samantha Luiza Athayde Silva
   */
  static async create(req, res, next) {
    const data = req.body;
    try {
      const newScheduleCreated = await SchedulingRepository.create(data);
      return res.status(201).json(newScheduleCreated);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  /**
   * Método responsável por retornar todos os agendamentos
   *
   * @param {Objeto da requisição} req Dados obtidos pela requisição do cliente
   * @param {Objeto da resposta} res Dados a serem retornados pelo servidor
   * @param {Objeto da solicitação do middleware} next Controla as solicitações dos pŕoximos middlewares da cadeia
   * @returns Retorna todos os agendamentos, o status HTTP da requisição e um JSON com o estado da requisição
   *
   * @author Samantha Luiza Athayde Silva
   */
  static async getAllSchedulings(req, res) {
    try {
      const allSchedulings = await SchedulingRepository.getAllSchedulings();
      return res.status(200).json(allSchedulings);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Método responsável por retornar um agendamento especificado por id
   *
   * @param {Objeto da requisição} req Dados obtidos pela requisição do cliente
   * @param {Objeto da resposta} res Dados a serem retornados pelo servidor
   * @returns Retorna um agendamento caso a operação seja bem sucedida, do contrário, retorna uma mensagem de erro
   *
   * @author Samantha Luiza Athayde Silva
   */
  static async getScheduling(req, res) {
    const { id } = req.params;

    try {
      const scheduling = await SchedulingRepository.getScheduling(id);
      return res.status(200).json(scheduling);
    } catch (error) {
      return res.status(500).json({ error: error.meesage });
    }
  }

  /**
   * Método responsável por confirmar um agendamento
   *
   * @param {Objeto da requisição} req Dados obtidos pela requisição do cliente
   * @param {Objeto da resposta} res Dados a serem retornados pelo servidor
   * @returns Retorna um objeto contendo uma mensagem de sucesso ou uma mensagem de erro.
   *
   * @author Samantha Luiza Athayde Silva
   */
  static async confirmScheduling(req, res) {
    const { id } = req.params;

    try {
      await SchedulingRepository.confirmScheduling(id);
      return res
        .status(200)
        .json({ msg: `agendamento de id #${id} confirmado com sucesso.` });
    } catch (error) {
      return res.status(500).json({ error: error.meesage });
    }
  }

  /**
   * Método responsável por concluir um atendimento/agendamento
   *
   * @param {Objeto} req Dados obtidos pela requisição do cliente
   * @param {Objeto} res Dados a serem retornados pelo servidor
   * @returns Retorna um objeto contendo uma mensagem de sucesso ou uma mensagem de erro.
   *
   * @author Samantha Luiza Athayde Silva
   */
  static async finalizeAppointment(req, res) {
    const { token } = req.params;

    try {
      await SchedulingRepository.finalizeAppointment(token);
      return res
        .status(200)
        .json({ msg: `agendamento de token #${token} concluido.` });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   * Método responsável por cancelar um atendimento/agendamento
   *
   * @param {Objeto} req Dados obtidos pela requisição do cliente
   * @param {Objeto} res Dados a serem retornados pelo servidor
   * @returns Retorna um objeto contendo uma mensagem de sucesso ou uma mensagem de erro.
   *
   * @author Samantha Luiza Athayde Silva
   */
  static async cancelAppointment(req, res) {
    const { id } = req.params;

    try {
      await SchedulingRepository.cancelScheduling(id);
      return res
        .status(200)
        .json({ msg: `agendamento de id #${id} cancelado.` });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = SchedulingController;
