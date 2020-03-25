This project was bootstrapped with [npm init -Y](https://expressjs.com/pt-br/starter/installing.html)

### Goal

This project is the backend application of the project `Be Hero`. The complement repositories are following bellow:

- [frontend web application](https://github.com/joaofanchini/be-hero-frontend-web.git)

### Available scripts

To start the application:

### `npm start`

### Frameworks and libraries

- Express
- Nodemon (dev dependecies)
- Banco de dados (SQLite - banco relacional de simples manuseio para desenvolvimento) - driver sqlite3
- KNEX.JS (query builder sql) - Junto ao Migration CLI
- Cors module(npm install cors)
- Crypto

### Info run

To create the knex file, run `npx knex init`. With this you can accesss the knexfile where you can set the configuration of the database.

To run the file `npx knex migrate:latest`

To execute a rollback or a down, just following the KNEX documentation.

`npx knex migrate:status` -> To see all the executed migrations.

## Technical details

### Entities

- ONGS
- INCIDENTS

### Functionalities of application

- Login de ONG
- Logout de ONG
- Cadastro de ONG
- Cadastro de novos incidentes
- Deletar incidentes
- Listar incidentes específicos de uma ONG
- Listar todos os incidentes
- Entrar em contato com a ONG (e-mail, whatsapp)
