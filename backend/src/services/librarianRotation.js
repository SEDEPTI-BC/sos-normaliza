const UserRepository = require("../repositories/user.repository");
const LibrarianScheduleRepository = require("../repositories/librarianSchedule.repository");

async function librarianRotation(appointmentDay, timeId) {
  // const allLibrarians = UserRepository.getAllLibrarians()
}

// TODO: async function rodizioBibliotecarios(dia, horarioId) {
//   const bibliotecarios =
//     await UsuariosRepository.pegaBibliotecariosPorQuantidadeDeAgendamento();

//   let bibliotecarioEscolhido;

//   for (let i = 0; i < bibliotecarios.length; i++) {
//     if (await bibliotecarioPodeAtender(dia, horarioId, bibliotecarios[i].id)) {
//       console.log(bibliotecarios[i].nome + " pode atender nesse horario.");
//       bibliotecarioEscolhido = bibliotecarios[i];
//       break;
//     }
//   }

//   try {
//     return bibliotecarioEscolhido.id;
//   } catch {
//     throw new Error(
//       "Não existem bibliotecarios disponiveis nesse dia e horario"
//     );
//   }
// }

module.exports = librarianRotation;
