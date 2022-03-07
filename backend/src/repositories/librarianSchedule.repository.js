const database = require("../models");

class LibrarianScheduleRepository {
  // checks if librarian can attend to an appointment at that time
  /**
   * Método para checar se um bibliotecário pode ou não atender um agendamento em um determinado horário
   * 
   * @param {Inteiro} librarianId Identificador do bibliotecário
   * @param {Inteiro} timeId Identificador do horário
   * @returns Retorna uma promise e um boolean informando a disponibilidade do bibliotecário em atender um determinado agendamento em um determinado horário. Caso verdadeiro, o bibliotecário estará apto para prestar consultoria, caso falso ele será desconsiderado da função até que esteja novamente disponibilizado na fila
   * 
   * @author Samantha Luiza Athayde Silva
   */
  static async checkAvailability (librarianId, timeId) {
    const librarianAvailable = await database.LibrarianSchedule.findOne({
      where: {
        user_id: librarianId,
        time_id: timeId,
      },
    });

    return librarianAvailable ? true : false;
  }
}

module.exports = LibrarianScheduleRepository;
