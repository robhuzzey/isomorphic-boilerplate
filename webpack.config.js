'use strict'
const path = require('path')
const webpack = require('webpack')

const minifyReact = new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }) // This has effect on the react lib size
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    properties: true,
    sequences: true,
    dead_code: true,
    conditionals: true,
    comparisons: true,
    evaluate: true,
    booleans: true,
    unused: true,
    loops: true,
    hoist_funs: true,
    cascade: true,
    if_return: true,
    join_vars: true,
    drop_debugger: true,
    unsafe: true,
    hoist_vars: true,
    negate_iife: true
  },
  sourceMap: false,
  mangle: {
    toplevel: false,
    sort: false,
    eval: false,
    properties: false
  },
  output: {
    space_colon: false,
    comments: false
  }
})

const treeShake = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false
})

// This removes the locale strings from Moment.js to reduce the file size on minification
const squishMoment = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)

const plugins = []
if (!process.env.WEBPACK_DEV) {
  plugins.unshift(minifyReact, uglifyPlugin, squishMoment, treeShake)
}

module.exports = {
  name: 'application',
  entry: path.join(__dirname, 'src', '/client.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        enforce: 'pre',
        use: [
          {
            loader: 'json-loader'
          }
        ]

      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: plugins
}
