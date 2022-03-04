const { Router } = require("express");

const timeRoutes = require("./time.routes");
const userRoutes = require("./users.routes");

const routes = Router();

routes.get("/", (req, res, next) =>
  res.json({
    status: "API working",
  })
);

routes.use(timeRoutes);
routes.use(userRoutes);

module.exports = routes;
