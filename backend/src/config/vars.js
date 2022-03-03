const path = require('path');

require('dotenv-safe').config({
  allowEmptyValues: true,
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  example: path.join(__dirname, '../../.env.example'),
})

module.exports = {
  app_port: process.env.APP_PORT,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  db_dialect: process.env.DB_DIALECT,
}
