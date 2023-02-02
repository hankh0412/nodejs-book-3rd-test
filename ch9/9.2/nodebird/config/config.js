require('dotenv').config();

module.exports = {
  "development": {
    "username": "admin",
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "nodebird",
    "host": process.env.SEQUELIZE_HOST,
    "dialect": "mysql",
    "operatorAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
