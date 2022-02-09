const express = require('express');
const questionController = require('./controllers/questionController')
const roomControllers = require('./controllers/roomControllers')
const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));

route.get('/room/:room', roomControllers.open);
route.post('/create-room', roomControllers.create);
route.post('/enterroom', roomControllers.enter);

route.post('/question/:room/:question/:action', questionController.index);
route.post('/question/create/:room', questionController.create);

module.exports = route;