const UserRepository = require("../repositories/UserRepository");

class UserController {
  static async create(req, res) {
    const data = req.body;

    try {
      const newUserCreated = await UserRepository.create(data);
      return res.status(201).json(newUserCreated);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserRepository.getAllUsers();

      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getAllLibrarians(req, res) {
    try {
      const allLibrarians = await UserRepository.getAllLibrarians();

      return res.status(200).json(allLibrarians);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;
