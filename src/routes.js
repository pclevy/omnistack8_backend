express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.send({ message: `Alô, IA Paulo Cesar ${req.query.name}` });
});

module.exports = routes;