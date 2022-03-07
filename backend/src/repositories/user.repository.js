const database = require("../models");
const bcrypt = require("bcrypt");

class UserRepository {
  /**
   * Método para criar um novo usuário no banco de dados
   * 
   * @param {Objeto de dados do usuário} data Informações referente ao usuário passados em formato de objeto
   * @returns Retorna uma promise e um novo usuário no banco de dados
   * 
   * @author Samantha Luiza Athayde Silva
   */
  static async create (data) {
    const { name, email, password, role } = data;

    const hashedPassword = await bcrypt.hash(password, 12);

    try {
      await database.User.create({
        name,
        email,
        password: hashedPassword,
        role,
      });

      return { name, email, role }; // returning info from new user
    } catch {
      throw new Error("Não foi possivel criar um novo usuario");
    }
  }

  /**
   * Método para listar todos os usuários
   * 
   * NOTA 1: não utilizar esse método para qualquer outro fim que não envolva o usuário administrador
   * 
   * @returns Uma promise e todos os usuários no cadastrados no banco de dados em formato de array
   * 
   * @author Samantha Luiza Athayde Silva
   */
  static async getAllUsers () {
    try {
      const allUsers = await database.User.findAll();
      return allUsers;
    } catch {
      throw new Error("Não foi possivel retornar usuarios");
    }
  }

  /**
   * Método para listar todos os bibliotecários
   * 
   * NOTA 1: não utilizar esse método para qualquer outro fim que não envolva o usuário administrador
   * 
   * @returns Uma promise e todos os bibliotecários no cadastrados no banco de dados em formato de array
   * 
   * @author Samantha Luiza Athayde Silva
   */
  static async getAllLibrarians () {
    try {
      const allLibrarians = await database.User.findAll({
        where: {
          role: "LIBRARIAN",
        },
      });
      return allLibrarians;
    } catch {
      throw new Error("Não foi possivel retornar bibliotecarios");
    }
  }

  /**
   * Método para listar todos os bibliotecários com ordenação por quantidade de agendamentos
   * 
   * NOTA 1: não utilizar esse método para qualquer outro fim que não envolva o usuário administrador
   * 
   * @returns Uma promise e todos os bibliotecários cadastrados no banco de dados em formato de array
   * 
   * @author Samantha Luiza Athayde Silva
   */
  static async getLibrariansBySchedulingAmount () {
    try {
      const librarians = await database.User.findAll({
        where: {
          role: "LIBRARIAN",
        },
        attributes: {
          include: [
            [
              database.sequelize.literal(`(
                SELECT COUNT(*)
                FROM Schedulings AS Scheduling
                WHERE
                  Scheduling.user_id = User.id
              )`),
              "SchedulingCount",
            ],
          ],
        },
        order: [[database.sequelize.literal("SchedulingCount"), "ASC"]],
      });
      return librarians;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserRepository;
