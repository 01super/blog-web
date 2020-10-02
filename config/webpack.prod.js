const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const productionConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'), // 绝对路径
    filename: '[name].bundle.[chunkhash:7].js'
  }
};

module.exports = merge(common, productionConfig);
