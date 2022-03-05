const SchedulingRepository = require("../repositories/SchedulingRepository");

class SchedulingController {
  static async create(req, res) {
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
