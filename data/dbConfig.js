const knex = require('knex');

const knexConfigure = require('../knexfile');

module.exports = knex(knexConfigure.development);