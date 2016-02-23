'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

gulp.task("buildHtml:production",function(){
    return gulp.src([
            config.paths.rev + "**/*.json",
            config.paths.htmlSrc
        ])
        .pipe($.include())
            .on('error',console.log)
        .pipe($.revCollector())
        .pipe(gulp.dest(config.paths.htmlDist));
});
