const express = require('express');

const app = express(); // variável responsável por representar a aplicação
app.use(express.json()); // necessário para que consiga realizar o parser da mensagens de entrada
// isso é necessário para que ele consiga entender o Request Body

app.get('/', (req, resp) => {
  return resp.json({
    evento: 'Semana de treinamento OmniStack',
    nome: 'João Victor'
  });
}); // definindo o primeiro GET da aplicação

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

let port = 3333;
hostname = 'localhost';
app.listen(port, 'localhost', () => {
  console.log('Running on ' + 'http://' + hostname + ':' + port);
}); // definição da porta a ser executada a aplicação
