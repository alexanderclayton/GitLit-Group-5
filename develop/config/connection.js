const Sequelize = require('sequelize');
require('.env').config();

const sequelize = new Sequelize(
  process.env.FORUM_DB,
  process.env.FORUM_DB,
  process.env.FORUM_DB,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;