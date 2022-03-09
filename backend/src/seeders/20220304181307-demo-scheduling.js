'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Schedulings', [
      {
        id: 1,
        type: 'PRESENCIAL',
        time_id: 1, // seg 9h30
        user_id: 1, //joao
        meet_link: '',
        status: 'PENDENTE',
        requester_name: 'Lucas Silva',
        requester_email: 'lucas@email.com',
        appointment_day: new Date('2022-05-09'), // 09/05/2022 -> seg
        token: '4fe4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        type: 'ONLINE',
        time_id: 3, // ter 11h
        user_id: 2, //ana
        meet_link: 'gmeet.com/ana',
        status: 'PENDENTE',
        requester_name: 'Mark Grayson',
        requester_email: 'markg@email.com',
        appointment_day: new Date('2022-05-10'), // 09/05/2022 -> ter
        token: '28ca',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Schedulings');
  },
};
