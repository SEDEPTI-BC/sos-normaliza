const { Router } = require('express');
const AuthController = require('../controllers/auth.controller');
const UserController = require('../controllers/user.controller');
const passport = require('passport');

const userRoutes = Router();

userRoutes.get(
  '/users',
  passport.authenticate('bearer', { session: false }),
  UserController.getAllUsers
);
userRoutes.get('/users/:id', UserController.getUserById);
userRoutes.get('/users/librarians', UserController.getAllLibrarians);
userRoutes.post(
  '/users/login',
  passport.authenticate('local', { session: false }),
  AuthController.login
);

module.exports = userRoutes;
