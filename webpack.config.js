const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(path.resolve(__dirname), 'src', 'app.jsx'),
  ],
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
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: 'css-loader'},
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('precss'), require('autoprefixer')],
              },
            },
            {loader: 'sass-loader'},
          ],
        }),
      },
      {
        test: /\.(png|svg|gif|jpg|jpeg|woff|woff2|eot|ttf)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(__dirname), 'src', 'index.html'),
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify('http://127.0.0.1:5000/v1/'),
      AUTH_USER: JSON.stringify('authUser'),
    }),
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
};
