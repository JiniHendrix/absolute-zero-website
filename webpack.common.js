const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'public/build'),
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /.jsx*$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
