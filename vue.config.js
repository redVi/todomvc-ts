const homepage = require('./package.json').homepage;

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? homepage + '/' : '/',
  crossorigin: 'anonymous',
  productionSourceMap: false
}
