'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

gulp.task('buildJs',function(){
  var result,appConfig,
    appNames = config.apps.appNames;

  for(var i = 0; i < appNames.length; i++){
    appConfig = config.apps[appNames[i]];
    result = gulp.src(appConfig.js)
      .pipe($.angularFilesort())
      .pipe($.ngAnnotate())
      .pipe($.concat(appNames[i]+'.js'))
      .pipe($.size({showFiles:true}))
      .pipe(gulp.dest(config.paths.scriptDist))

  }
  return result;
});
