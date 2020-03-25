// Aqui declaramos as transações automaticas das migrations

const TABLE_NAME = 'ONGS';
// Relacionado à quando for subir o ambiente
exports.up = function(knex) {
  // Criando nova tabela
  // A função de callback retorna o objeto table

  return knex.schema.createTable(TABLE_NAME, table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

// Relacionado à quando for derrubar ou dar rollback no ambiente
exports.down = function(knex) {
  return knex.schema.dropTable(TABLE_NAME);
};

/**
 * Lembrando que o JavaScript é uma linguagem assíncrona, logo seu retorno é uma
 * promisse.
 */
