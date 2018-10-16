const homepage = require('./package.json').homepage;

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? `${homepage}/`
    : '/'
}
