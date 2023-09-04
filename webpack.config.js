const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';

module.exports = {
  mode: 'production',
  target: 'browserslist',
  entry: './index.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },

      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {targets: 'defaults'}],
            ],
            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-classes'],
          },
        },
      },

      {
        test: /\.(scss|css)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'],
      },

      {
        test: /\.(png|jpe?g|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '../',
            name: 'assets/image/[name].[ext]',
          },
        },
      },
    ],
  },

  devServer: {
    compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
}