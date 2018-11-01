const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: ['babel-polyfill', './src/index.js'],

  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'static/index.html'),
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  devServer: {
    compress: true,
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        secure: false
      }
    },
  },

};

