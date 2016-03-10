var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: path.join(__dirname, "app"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: [
    './index.js'
  ],
  output: {
    path: debug ? __dirname + '/dist' : __dirname,
    filename: debug ? "index_bundle.js" : "index.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ]
  },
  plugins: debug ? [HTMLWebpackPluginConfig] : [
    HTMLWebpackPluginConfig,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
