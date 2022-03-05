const { Router } = require('express');
const timeRoutes = Router();
const TimeController = require('../controllers/time.controller');

timeRoutes.get('/horarios', TimeController.index);

module.exports = timeRoutes;
