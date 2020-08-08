const routes = require('express').Router();
const userController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

routes.get('/users', userController.index);
routes.post('/users', userController.create);

routes.post('/session', SessionController.create);

module.exports = routes;
