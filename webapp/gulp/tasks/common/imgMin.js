'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

/*
 * 删除图片无关信息
 */
gulp.task('imgMin', function () {
  return gulp.src(config.paths.image+"**/*.*")
    .pipe($.size({showFiles:true}))
    .pipe($.cache($.imagemin({
      optimizationLevel: 4,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(config.paths.image))
    .pipe($.size({showFiles:true}))
});
