// development config
const merge = require('webpack-merge');
const commonConfig = require('./dev');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});
