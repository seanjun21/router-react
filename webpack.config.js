var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];
var babelPresets = {
  presets: ['es2015', 'react']
};

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, packageData.main)
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: filename.join('.'),
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      exclude: /(node_modules)/,
      loaders: ['react-hot', 'babel-loader?' + JSON.stringify(babelPresets)]
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
