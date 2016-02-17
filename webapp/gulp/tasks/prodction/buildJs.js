'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

gulp.task('buildJs:production',function(){
    var result,appConfig,
        appNames = config.apps.appNames;

    for(var i = 0; i < appNames.length; i++){
        appConfig = config.apps[appNames[i]];
        result = gulp.src(appConfig.js)
            .pipe($.angularFilesort())
            .pipe($.ngAnnotate())
            .pipe($.concat(appNames[i]+'.js'))
            .pipe($.uglify())
            .pipe($.rev())
            .pipe(gulp.dest(config.paths.dist +'js/'))
            .pipe($.rev.manifest({
                merge: true
            }))
            .pipe(gulp.dest(config.paths.rev))
    }
    return result;
});
