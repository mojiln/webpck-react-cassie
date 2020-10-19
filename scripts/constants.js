const path = require('path')

const isDevelopment = process.env.NODE_ENV !== 'production'
const SERVER_HOST = 'localhost'
const SERVER_PORT = 9000

const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name

module.exports = {
  isDev: isDevelopment,
  SERVER_HOST,
  SERVER_PORT,
  PROJECT_PATH,
  PROJECT_NAME,
}
