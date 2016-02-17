'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');
var stylish = require('jshint-stylish');

// 通过jshint检测js语法
gulp.task('hintJs', function () {
  return gulp.src(config.paths.scriptSrc+'**/*.js')
    .pipe($.jshint(".jshintrc"))
    .pipe($.jshint.reporter(stylish))
});
