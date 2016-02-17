'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

gulp.task('buildStyle:production',function(){
  var result,appConfig,
    appNames = config.apps.appNames;

  for(var i = 0; i < appNames.length; i++){
    appConfig = config.apps[appNames[i]];
    result = gulp.src(appConfig.styles)
        .pipe($.sass({
            outputStyle: 'compressed',
            precision: 10
        }))
        .pipe($.rev())
        .pipe(gulp.dest(config.paths.styleDist))
        .pipe($.rev.manifest({
            merge: true
        }))
        .pipe(gulp.dest(config.paths.rev))

  }
  return result;
});
