const SchedulingRepository = require("../repositories/SchedulingRepository");

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
      return res
        .status(201)
        .json(newScheduleCreated);
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message });
    }
  }

  /**
   * Método responsável por retornar todos os agendamentos de um determinado usuário
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
      return res
        .status(200)
        .json(allSchedulings);
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message });
    }
  }
}

module.exports = SchedulingController;
