const { Router } = require("express");
const UserController = require("../controllers/user.controller");

const userRoutes = Router();

userRoutes.get("/users", UserController.getAllUsers);

module.exports = userRoutes;
