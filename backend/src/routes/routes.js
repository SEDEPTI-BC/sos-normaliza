const { Router } = require('express');
const doubtsRoutes = require('./doubts.routes');
const timeRoutes = require('./time.routes');

const routes = Router();

routes.get('/', (req, res, next) => res.json({ 
  status: "API working",
}));

routes.use(doubtsRoutes);
routes.use(timeRoutes);

module.exports = routes;
