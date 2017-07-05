const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'public/build'),
    publicPath: '/build/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', 'map'],
  },
};
