/**
 * Created by joe on 16/9/6.
 */
'use strict';

let path = require('path');

console.log(path.join(__dirname, './src'));

module.exports = {
  entry: {
    Dashboard: './src/Dashboard.jsx'
  },
  output: {
    path: 'lib',
    filename: '[name].js',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, './src')]
      }
    ]
    // rules: {
    //   test: /\.(js|jsx)$/,
    //   use: [
    //     {loader: 'babel-loader'}
    //   ]
    // }
  },
  externals: {
    'react': 'react',
    'lodash': 'lodash'
  }
};
