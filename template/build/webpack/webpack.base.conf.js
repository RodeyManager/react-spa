'use strict';
const path = require('path');
const utils = require('../utils');
const config = require('../../config');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const styleLoaders = require('./style.loaders');

function resolve(dir) {
  return path.join(config.context, dir);
}

// 生成样式loader，
const cssLoaders = styleLoaders({
  sourceMap: config.env === 'dev' ? config.dev.sourceMap : config.build.productionSourceMap,
  extract: true,
  usePostCSS: true
});

module.exports = merge({
  context: config.context,
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: config.env !== 'dev' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [{
        test: /\.(js|jsx|mjs)$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        loader: 'file-loader',
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
        options: {
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          publicPath: '../../'
        }
      }
    ]
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/app.min.css'),
      allChunks: true,
    }),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  }
}, {
  module: {
    rules: cssLoaders
  }
});
