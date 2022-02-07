/**
 * モジュール読み込み
 */
const { task, series } = require('gulp');


/**
 * タスクモジュール読み込み
 */
const { SASS_BUILD } = require('./tasks/sass-build');


/**
 * タスク定義
 */
task('sassBuild', series(SASS_BUILD));
