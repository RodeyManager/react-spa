'use strict';

const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.conf');
const env = process.env.NODE_ENV;

const spinner = ora({
  text: `Start building for ${env}...`,
  // https://www.npmjs.com/package/cli-spinners
  spinner: {
    "interval": 80,
    "frames": ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
  },
});
spinner.start();

webpack(webpackConfig, (err, stats) => {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n'
  );

  if (stats.hasErrors()) {
    console.log(chalk.red('  End building as fail.\n'));
    process.exit(1);
  }

  console.log(chalk.cyan('  End building as success.\n'));
});
