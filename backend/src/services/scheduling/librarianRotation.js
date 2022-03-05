const UserRepository = require("../../repositories/user.repository");
const LibrarianScheduleRepository = require("../../repositories/librarianSchedule.repository");

async function librarianRotation(timeId) {
  const librariansOrderedBySchedulingAmount =
    await UserRepository.getLibrariansBySchedulingAmount();

  let chosenLibrarian;

  for (let i = 0; i < librariansOrderedBySchedulingAmount.length; i++) {
    const librarianAvailable = LibrarianScheduleRepository.checkAvailability(
      librariansOrderedBySchedulingAmount[i].id,
      timeId
    );

    if (librarianAvailable) {
      chosenLibrarian = librariansOrderedBySchedulingAmount[i];
      break;
    }
  }
  return chosenLibrarian.id;
}

module.exports = librarianRotation;
