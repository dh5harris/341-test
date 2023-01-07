const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.getName);

// routes.get('/', (req, res) => {
//   res.send('Kristy Harris');
// });

module.exports = routes;