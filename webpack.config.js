const webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: './src/index.js',
  dist: path.join(__dirname, 'dist'),
  html: './src/index.html'
};

module.exports = {
  entry: {
    javascript: PATHS.app,
    html: PATHS.html
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.dist
  },
  eslint: {
    emitWarning: true
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
