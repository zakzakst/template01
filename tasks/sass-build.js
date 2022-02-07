/**
 * モジュール読み込み
 */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const sassGlob = require('gulp-sass-glob-use-forward');
const sass = require('gulp-sass')(require('sass'));


/**
 * 変数設定
 */
const files = './src/sass/style.scss';
const dist = './dist/css';


/**
 * 関数
 */
const SASS_BUILD = () => {
  return src(files)
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(dest(dist));
};

module.exports = { SASS_BUILD };
