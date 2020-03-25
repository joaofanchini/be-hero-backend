const TABLE_NAME = 'INCIDENTS';

exports.up = function(knex) {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments('id');
    table.string('title').notNullable();
    table.decimal('value').notNullable();
    table.string('ong_id').notNullable();
    table.string('description').notNullable();

    table
      .foreign('ong_id')
      .references('id')
      .inTable('ONGS');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
