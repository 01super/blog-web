const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

const developmentConfig = {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../public/dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    host: '0.0.0.0', // 这样配置可以使其它设备在同一局域网中也能够访问到
    port: 8080,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://52star.net',
        changeOrigin: true
      }
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = merge(common, developmentConfig);
