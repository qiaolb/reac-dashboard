/**
 * Created by joe on 16/9/14.
 */

/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack_dev.config');
// const open = require('open');

new WebpackDevServer(webpack(config), config.devServer)
  .listen(config.devServer.port, '0.0.0.0', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + config.devServer.port);
    // console.log('Opening your system browser...');
    // open('http://localhost:' + config.port + '/webpack-dev-server/');
  });
