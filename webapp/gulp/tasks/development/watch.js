'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

//watch
gulp.task('watch',function(){
  gulp.watch(config.paths.jsSrc+"**/*.js",['buildJs']);

  gulp.watch(config.paths.styleSrc+"**/*.scss",['buildStyle']);

  gulp.watch(config.paths.images,['image']);

});
