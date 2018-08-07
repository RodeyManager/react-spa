'use strict';
const merge = require('webpack-merge');
const prdEnv = require('./prd.env');

module.exports = merge(prdEnv, {
  NODE_ENV: '"development"',
  OPEN_PROXY: false
});
