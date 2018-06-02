const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = merge(baseConfig, {
})

delete config.entry // 在开发,测试环境下 webpack.entry 的配置删除掉
delete config.output.library // 在开发,测试环境下 webpack.output.library 的配置删除掉
delete config.output.libraryTarget // 在开发,测试环境下 webpack.output.library 的配置删除掉

module.exports = config
