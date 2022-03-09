const { Router } = require('express');
const SchedulingController = require('../controllers/scheduling.controller');

const schedulingsRoutes = Router();

schedulingsRoutes.post('/schedulings', SchedulingController.create);
schedulingsRoutes.get('/schedulings', SchedulingController.getAllSchedulings);
schedulingsRoutes.get('/schedulings/:id', SchedulingController.getScheduling);
schedulingsRoutes.post(
  '/schedulings/:id/confirm',
  SchedulingController.confirmScheduling
);
schedulingsRoutes.post(
  '/schedulings/:token/finalize',
  SchedulingController.finalizeAppointment
);
schedulingsRoutes.post(
  '/schedulings/:id/cancel',
  SchedulingController.cancelAppointment
);

module.exports = schedulingsRoutes;
