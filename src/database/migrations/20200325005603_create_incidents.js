const TABLE_NAME = 'INCIDENTS';
const ONGS_TABLE_NAME = 'ONGS';

exports.up = function(knex) {
  knex.schema.createTable(TABLE_NAME, table => {
    table.increment('id');
    table.string('title').notNullable();
    table.decimal('value').notNullable();
    table.string('ong_id').notNullable();
    table.string('description').notNullable();

    table.foreign('ong_id').references('INCIDENTS.ong_id');
  });
};

exports.down = function(knex) {
  knex.schema.dropTable(TABLE_NAME);
};
