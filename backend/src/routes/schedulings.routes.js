const { Router } = require('express');
const SchedulingController = require('../controllers/scheduling.controller');

const schedulingsRoutes = Router();

schedulingsRoutes.post('/schedulings', SchedulingController.create);
schedulingsRoutes.get('/schedulings', SchedulingController.getAllSchedulings);
schedulingsRoutes.get('/schedulings/:id', SchedulingController.getScheduling);

module.exports = schedulingsRoutes;
