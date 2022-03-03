const { Router } = require('express');
const doubtsRoutes = Router();
const doubstController = require('../controllers/doubts.controller');

doubtsRoutes.get('/duvidas', doubstController.index);

module.exports = doubtsRoutes;
