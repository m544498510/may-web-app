
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const NODE_ENV = process.env.NODE_ENV;
const ENV_DEVELOPMENT = NODE_ENV === 'development';
const ENV_PRODUCTION = NODE_ENV === 'production';

//=========================================================
//  CONFIG
//---------------------------------------------------------
let config = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    },
    extensions: [
      '/index.js', '.js'
    ]
  },
  entry: {
    main: ['./src/main.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: NODE_ENV ? JSON.stringify(NODE_ENV) : JSON.stringify(
          'development')
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html')
    })
  ],
  
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: false
              }
            }, {
              loader: 'less-loader',
              options: {
                modifyVars: {
                  '@icon-url': '"/asset/antdIconFont/iconfont"'
                }
              }
            }]
        })
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  devtool: 'source-map'
};

//=====================================
//  DEVELOPMENT
//-------------------------------------
if (ENV_DEVELOPMENT) {
  for (var key in config.entry) {
    let obj = config.entry[key];
    obj.unshift('webpack-hot-middleware/client?reload=true');
    obj.unshift('react-hot-loader/patch');
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new webpack.NamedModulesPlugin());
}
//=====================================
//  PRODUCTION
//-------------------------------------
if (ENV_PRODUCTION) {
  config.plugins.push(new UglifyJSPlugin());
  // Compress extracted CSS. We are using this plugin so that possible
  // duplicated CSS from different components can be deduped.
  config.plugins.push(new OptimizeCSSPlugin({
    cssProcessorOptions: {
      safe: true
    }
  }));
  config.output.publicPath = '/dist';
}

module.exports = config;
