// development config
const merge = require('webpack-merge');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
});
