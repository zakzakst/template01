/**
 * モジュール読み込み
 */
const { dest } = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

/**
 * 変数設定
 */
const dist = './dist/js';
const webpackConf = require('../webpack.config');

/**
 * 関数
 */
const WEBPACK = () => {
  return webpackStream(webpackConf, webpack).pipe(dest(dist));
};

module.exports = { WEBPACK };
