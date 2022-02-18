/**
 * モジュール読み込み
 */
const { task, series } = require('gulp');

/**
 * タスクモジュール読み込み
 */
const { NUNJUCKS_BUILD } = require('./tasks/nunjucks-build');
const { SASS_BUILD } = require('./tasks/sass-build');
const { WEBPACK } = require('./tasks/webpack');
const { IMAGE_MIN } = require('./tasks/image-min');

/**
 * タスク定義
 */
task('nunjucksBuild', series(NUNJUCKS_BUILD));
task('sassBuild', series(SASS_BUILD));
task('webpack', series(WEBPACK));
task('imageMin', series(IMAGE_MIN));
