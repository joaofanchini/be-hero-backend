// Arquivo responsável pelas rotas de nossa aplicação
const express = require('express');

const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');

// Elemento responsável pelo gerenciamento de rotas dentro do Express
const routes = express.Router();

// Cadastrar e listar todas as ongs
routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.getAllOngs);

// Criar, listar e deletar incidentes
routes.post('/incident', incidentController.create);
routes.get('/incident', incidentController.getAllIncidents);
routes.delete('/incident/:id', incidentController.delete);

// Listar incidentes por ongs
routes.get('/profile', profileController.incidentsByOngs);

// Login
routes.post('/session', sessionController.login);

module.exports = routes;
