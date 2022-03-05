const { Router } = require('express');
const doubtsRoutes = Router();
const DoubstController = require('../controllers/doubts.controller');

doubtsRoutes.get('/duvidas', DoubstController.index);

module.exports = doubtsRoutes;
