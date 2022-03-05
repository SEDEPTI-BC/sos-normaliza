const { Router } = require("express");
const UserController = require("../controllers/user.controller");

const userRoutes = Router();

userRoutes.get("/users", UserController.getAllUsers);
userRoutes.get("/users/librarians", UserController.getAllLibrarians);

module.exports = userRoutes;
