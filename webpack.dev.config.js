/* eslint-disable import/no-extraneous-dependencies */

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');
const Webpack = require('webpack');


module.exports = Merge(CommonConfig, {
  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', 'webpack/hot/dev-server', './src/index.jsx'],
  output: {
    path: '/',
    publicPath: 'http://localhost:3000/scripts/',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  target: 'web',
  plugins: [
    // added this thing!
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', 'map'],
  },
});
