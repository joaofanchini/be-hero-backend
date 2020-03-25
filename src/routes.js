// Arquivo responsável pelas rotas de nossa aplicação
const express = require('express');

// Elemento responsável pelo gerenciamento de rotas dentro do Express
const router = express.Router();

/** Tipos de parâmetros
 *
 * QueryString (?{parametro}={value})
 *    request.query; => Retorna todos as queryStrings enviadas.
 *
 * Route Parameters (/{:parametro})
 *    request.params; => Retorna todos as variáveis de rota enviadas.
 *
 * Request Body (Para a aplicação conseguir entender o
 *    payload de cada requisição é necessário indicar qual será o
 *    content-type que será consumido)
 *    request.body; => Acessado todo o objeto.
 *
 */

routes.get('/', (req, resp) => {
  return resp.json({
    evento: 'Semana de treinamento OmniStack',
    nome: 'João Victor'
  });
}); // definindo o primeiro GET da aplicação

module.exports = routes;
