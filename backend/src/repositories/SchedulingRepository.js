const database = require("../models");
const crypto = require("crypto");
const librarianRotation = require("../services/scheduling/librarianRotation");

function generateToken() {
  const hexToken = crypto.randomBytes(2).toString("Hex");
  return hexToken;
}

class SchedulingRepository {
  static async create(data) {
    const { time_id } = data;

    const token = generateToken();

    const librarianId = await librarianRotation(time_id);

    const newSchedulingData = { ...data, token, user_id: librarianId };

    try {
      const newScheduling = await database.Scheduling.create(newSchedulingData);
      return newScheduling;
    } catch {
      throw new Error("Não foi possivel criar um agendamento.");
    }
  }

  static async getAllSchedulings() {
    const allSchedulings = await database.Scheduling.findAll();
    return allSchedulings;
  }
}

module.exports = SchedulingRepository;
