'use strict';

/**
 * Require Browsersync along with webpack and middleware for it
 */

const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');

const webpackConfig = require('../webpack.config');
const srcPath = path.resolve(__dirname, '../src/');

//require the api mock module

const bundler = webpack(webpackConfig);
let config = {
  port: 5000,
  files: [
    path.resolve(srcPath, '**/*.css'),
    path.resolve(srcPath, '**/*.html')
  ],
  middleware: [
    webpackDevMiddleware(bundler, {
      // IMPORTANT: dev middleware can't access config, so we should
      // provide publicPath by ourselves
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      hot: true,
      historyApiFallback: true,
      
      // pretty colored output
      stats: {colors: true}
    }),
    
    // bundler should be the same as above
    webpackHotMiddleware(bundler)
  ]
};

//  config.middleware = config.middleware.concat(logSequenceMock);

/*
config.proxy = {
  target:'http://www.baidu.com',
  
   ws: false
};
*/
config.serveStatic = [
  {
    route: '/asset',
    dir: path.resolve(__dirname, '../asset')
  }
];
browserSync(config);
