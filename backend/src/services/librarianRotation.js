const UserRepository = require("../repositories/UserRepository");
const LibrarianScheduleRepository = require("../repositories/LibrarianScheduleRepository");

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
