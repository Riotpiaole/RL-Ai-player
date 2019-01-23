const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    app: ['babel-polyfill', './index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      },
    ],
  },
};
