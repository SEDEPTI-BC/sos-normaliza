const UserRepository = require('../../repositories/user.repository');
const LibrarianScheduleRepository = require('../../repositories/librarianSchedule.repository');

async function librarianRotation(timeId) {
  const librariansOrderedBySchedulingAmount =
    await UserRepository.getLibrariansBySchedulingAmount();

  for (let i = 0; i < librariansOrderedBySchedulingAmount.length; i++) {
    const librarianAvailable = LibrarianScheduleRepository.checkAvailability(
      librariansOrderedBySchedulingAmount[i].id,
      timeId
    );

    if (librarianAvailable) {
      return librariansOrderedBySchedulingAmount[i];
    }
  }
  // couldn't find any librarian available
  return null;
}

module.exports = librarianRotation;
