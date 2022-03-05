const { Router } = require("express");
const SchedulingController = require("../controllers/SchedulingController");

const schedulingsRoutes = Router();

schedulingsRoutes.get("/schedulings", SchedulingController.getAllSchedulings);
schedulingsRoutes.post("/schedulings", SchedulingController.create);

module.exports = schedulingsRoutes;
