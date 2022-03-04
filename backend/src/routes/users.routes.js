const { Router } = require("express");
const UserController = require("../controllers/UserController");

const userRoutes = Router();

userRoutes.get("/users", UserController.getAllUsers);

module.exports = userRoutes;
