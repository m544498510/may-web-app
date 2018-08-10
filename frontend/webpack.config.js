const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//= ========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const isDevMode = process.env.NODE_ENV === 'development';

//= ========================================================
//  CONFIG
//---------------------------------------------------------
let config = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
    extensions: [
      '/index.js', '.js',
    ],
  },
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }, {
        test: /\.less$/,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
};

//= ====================================
//  DEVELOPMENT
//-------------------------------------
if (isDevMode) {
  config = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      watchContentBase: true,
      contentBase: [
        path.join(__dirname, '../frontend'),
      ],
      compress: true, // gzip
      port: 5000,
      hot: true,
      proxy: {
        '/api': 'http://localhost:9090/',
      },
      index: '/dist/index.html',
      historyApiFallback: {
        rewrites: [
          { from: /./, to: '/dist/index.html' },
        ],
      },
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
}
//= ====================================
//  PRODUCTION
//-------------------------------------
if (!isDevMode) {
  config = merge(config, {
    mode: 'production',
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  });
}

module.exports = config;
