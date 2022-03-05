const database = require("../models");

class LibrarianScheduleRepository {
  // checks if librarian can attend to an appointment at that time
  static async checkAvailability(librarianId, timeId) {
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
