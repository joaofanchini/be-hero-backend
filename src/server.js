const express = require('express');
const routes = require('./routes'); // O "./"" serve apenas para referenciar a pasta local
const app = express(); // variável responsável por representar a aplicação
const cors = require('cors');

/**
 * Por padrãoe le já vem liberado, caso vá realizar o deploy de algo, basta acrescentar a
 * url de origin
 */
app.use(cors());
app.use(express.json()); // necessário para que consiga realizar o parser da mensagens de entrada
// isso é necessário para que ele consiga entender o Request Body
app.use(routes); // Router importado

let port = 3333;
hostname = 'localhost';
app.listen(port, 'localhost', () => {
  console.log('Running on ' + 'http://' + hostname + ':' + port);
}); // definição da porta a ser executada a aplicação
