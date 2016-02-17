'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('../../config.js');

gulp.task('clean:images',function(callback){
  rimraf(config.paths.image, callback);
});


