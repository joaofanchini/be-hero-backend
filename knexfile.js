// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite' // Arquivo que irá ser a nossa base
    },
    migrations: {
      /**
       * Migrations consiste em você permitir que o queryBuilder verifique e crie
       * as tabelas necessárias para o seu desenvolvimento (de modo a permitir o
       * versionamento do mesmo com base nesse objeto) - Utilizando Migration CLI
       *
       * 1 arquivo migrations para 1 tabela
       *
       * Para criar sua primeira migração, basta rodar `npx knex migrate:make {migration_name}`
       */
      directory: './src/database/migrations'
    },
    // Para corrigir warning pois Sqlite não aceita inserção de valores padrão
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
