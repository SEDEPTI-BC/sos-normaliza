const database = require("../models");
const bcrypt = require("bcrypt");

class UserRepository {
  static async create(data) {
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

  static async getAllUsers() {
    try {
      const allUsers = await database.User.findAll();
      return allUsers;
    } catch {
      throw new Error("Não foi possivel retornar usuarios");
    }
  }

  static async getAllLibrarians() {
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

  static async getLibrariansBySchedulingAmount() {
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
