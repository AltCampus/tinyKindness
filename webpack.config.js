/* eslint-disable */
var webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  target: "web",
  entry: [
    './client/src/index.js',
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            }
          },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].client.bundle.js",
  }
}