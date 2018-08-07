'use strict';

const config = require('../config');

//导出模块
module.exports = {
  // 源文件路径, 默认为 src
  sourceDir: config.source.path,
  // 编译产出路径，可以是绝对或者相对路径，默认为 build
  buildDir: config.dest.path,
  // 每次执行编译之前是否清理当前编译目录
  startClean: true,
  // task任务列表
  buildTasks: require('./tasks'),
  // 部署配置
  deploy: require('./deploy')
};
