const { Router } = require('express');
const timeRoutes = Router();
const timeController = require('../controllers/time.controller');

timeRoutes.get('/horarios', timeController.index);

module.exports = timeRoutes;
