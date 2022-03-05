const UserRepository = require("../../repositories/UserRepository");
const LibrarianScheduleRepository = require("../../repositories/LibrarianScheduleRepository");

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
