const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(path.resolve(__dirname), 'src', 'app.js'),
  output: {
    path: path.join(path.resolve(__dirname), 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(__dirname), 'src', 'index.html'),
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
