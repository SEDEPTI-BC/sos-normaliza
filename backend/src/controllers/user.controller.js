const UserRepository = require("../repositories/user.repository");

class UserController {
  /**
   * Método responsável por criar um novo usuário no banco de dados
   * 
   * @param {Objeto da requisição} req Dados obtidos pela requisição do cliente
   * @param {Objeto da resposta} res Dados a serem retornados pelo servidor
   * @param {Objeto da solicitação do middleware} next Controla as solicitações dos pŕoximos middlewares da cadeia
   * @returns Retorna um novo usuário, o status HTTP da requisição e um JSON com o estado da requisição
   * 
   * @author Samantha Luiza Athayde Silva
   */
  static async create(req, res) {
    const data = req.body;

    try {
      const newUserCreated = await UserRepository.create(data);
      return res
        .status(201)
        .json(newUserCreated);
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message });
    }
  }

  /**
   * Método responsável por retornar todos os usuários
   * 
   * @param {Objeto da requisição} req Dados obtidos pela requisição do cliente
   * @param {Objeto da resposta} res Dados a serem retornados pelo servidor
   * @param {Objeto da solicitação do middleware} next Controla as solicitações dos pŕoximos middlewares da cadeia
   * @returns Retorna todos os usuários, o status HTTP da requisição e um JSON com o estado da requisição
   * 
   * @author Samantha Luiza Athayde Silva
   */
  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserRepository.getAllUsers();

      return res
        .status(200)
        .json(allUsers);
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message });
    }
  }

  /**
   * Método responsável por retornar todos os bibliotecários
   * 
   * @param {Objeto da requisição} req Dados obtidos pela requisição do cliente
   * @param {Objeto da resposta} res Dados a serem retornados pelo servidor
   * @param {Objeto da solicitação do middleware} next Controla as solicitações dos pŕoximos middlewares da cadeia
   * @returns Retorna todos os bibliotecários, o status HTTP da requisição e um JSON com o estado da requisição
   * 
   * @author Samantha Luiza Athayde Silva
   */
  static async getAllLibrarians(req, res) {
    try {
      const allLibrarians = await UserRepository.getAllLibrarians();

      return res
        .status(200)
        .json(allLibrarians);
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message });
    }
  }
}

module.exports = UserController;
