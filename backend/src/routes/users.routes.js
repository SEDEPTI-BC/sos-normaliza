const { Router } = require('express');
const AuthController = require('../controllers/auth.controller');
const UserController = require('../controllers/user.controller');
const { localAuth, bearerAuth } = require('../middlewares/auth.middleware');

const userRoutes = Router();

userRoutes.get('/users', bearerAuth, UserController.getAllUsers);
userRoutes.get('/users/:id', UserController.getUserById);
userRoutes.get('/users/librarians', UserController.getAllLibrarians);
userRoutes.post('/users/login', localAuth, AuthController.login);
userRoutes.post('/users/logout', bearerAuth, AuthController.logout);

module.exports = userRoutes;
