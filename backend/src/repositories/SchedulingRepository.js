const database = require("../models");
const crypto = require("crypto");

function generateToken() {
  const hexToken = crypto.randomBytes(2).toString("Hex");
  return hexToken;
}

class SchedulingRepository {
  static async create(data) {
    const { appointmentDay, timeId } = data;

    const token = generateToken();

    const librarianId = await librarianRotation(appointmentDay, timeId);

    // const repositoryData = {
    //   dia,
    //   usuarioId: usuarioId,
    //   horarioId,
    //   duvidaId,
    //   solicitanteNome,
    //   solicitanteEmail,
    //   token,
    // };

    // await AgendamentosRepository.criar(repositoryData);
    try {
      const newUserCreated = await database.Scheduling.create(data);
      return newUserCreated;
    } catch {
      throw new Error("Não foi possivel criar um agendamento.");
    }
  }
}

module.exports = SchedulingRepository;
