const express = require('express');

const app = express(); // variável responsável por representar a aplicação

app.get('/', (req, resp) => {
  return resp.json({
    evento: 'Semana de treinamento OmniStack',
    nome: 'João Victor'
  });
}); // definindo o primeiro GET da aplicação

app.listen(3333); // definição da porta a ser executada a aplicação
