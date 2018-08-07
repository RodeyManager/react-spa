/**
 * Build Tasks 应用编译相关任务
 */
'use strict';

const path = require('path');
const $ = require('gulp-load-plugins')();
const uuid = require('uuid/v1');
const config = require('../../config');

const distPath = config.dest.path;
const sourcePath = config.source.path;

module.exports = {
  // ---说明：单个任务配置

  // webpack编译
  'build.main': $.shell.task([`cross-env NODE_ENV=${config.env} node ${path.resolve(__dirname, '../webpack/build.js')}`]),

  // 合并配置文件
  'build.concat:config': {
    src: [`${sourcePath}/config/env/${config.env}.js`, `${sourcePath}/config/init.js`],
    dest: `${distPath}/assets/js`,
    loader: stream => stream.pipe($.concat('index.js'))
  },

  // 处理manifest
  'replace.manifest.js': {
    src: `${distPath}/assets/js/manifest.js`,
    dest: `${distPath}/assets/js`,
    rely: ['build.main'],
    loader: stream => stream.pipe($.replace(/\".js\";/g, `".js?_vc=${uuid()}";`))
  }
};
