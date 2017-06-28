/* eslint-disable import/no-extraneous-dependencies */

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const Webpack = require('webpack');

module.exports = Merge(CommonConfig, {
  plugins: [new Webpack.HotModuleReplacementPlugin()],
});
