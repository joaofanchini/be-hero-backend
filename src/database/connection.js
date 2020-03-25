/**
 * Dado que estamos utilizando o KNEX, a conexão de banco de dados vem dele
 */

const knex = require('knex');
const knexConfiguration = require('../../knexfile');

// Já que só estamos configurando o profile developmnet
const connection = knex(knexConfiguration.development);

module.exports = connection;
