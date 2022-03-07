const TimeRepository = require('../repositories/time.repository');

class TimeController {
  /**
   * Método index
   * 
   * @param {Objeto da requisição} req Dados obtidos pela requisição do cliente
   * @param {Objeto da resposta} res Dados a serem retornados pelo servidor
   * @param {Objeto da solicitação do middleware} next Controla as solicitações dos pŕoximos middlewares da cadeia
   * @returns Retorna todos os agendamentos, o status HTTP da requisição e um JSON com o estado da requisição
   * 
   * @author Gabriel Santos Cardoso
   */
  static async index (req, res, next) {
    res.json({ status: 'Endpoint available', endpoint: '/horarios/' });
  }
}

module.exports = TimeController;
