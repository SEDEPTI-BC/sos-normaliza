const DoubtsRepository = require('../repositories/doubts.repository');

class DoubtController {
  /**
   * Método index do controller
   * 
   * @param {Objeto da requisição} req Dados retornados da requisição
   * @param {Objeto da resposta} res Dados a serem retornados pelo servidor
   * @param {Objeto de solicitação de middleware} next Controla as solicitações dos próximos middlewares da cadeia
   * 
   * @author Gabriel Santos Cardoso
   */
  static async index (req, res, next) {
    res.json({ status: 'Endpoint available', endpoint: '/duvidas/' });
  }

  /**
   * Método para criação de uma dúvida
   * 
   * @param {Objeto da requisição} req Dados retornados pela requireção
   * @param {Objeto da resposta} res Dados a serem retornados pelo servidor
   * @param {Objeto de solicitação de middleware} next Controla as solicitações dos próximos middlewares da cadeia
   * @returns O status HTTP da requisição e um JSON contento uma mensagem de estado
   * 
   * @author Gabriel Santos Cardoso
   */
  static async create (req, res, next) {
    const { title } = req.body;

    try {
      await DoubtsRepository.create({ title });

      return res
        .status(201)
        .json({ message: 'Doubt has been created' });
    } catch (e) {
      return res
        .status(400)
        .json({ 
          message: 'An unexpected error during creating doubt',
          log: '`${e}`'
        });
    }
  }
}

module.exports = DoubtController;
