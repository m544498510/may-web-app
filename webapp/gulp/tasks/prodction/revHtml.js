'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

gulp.task("revHtml:production",function(){
    return gulp.src([
            config.paths.rev + "**/*.json",
            config.paths.htmls
        ])
        .pipe($.revCollector())
        .pipe(gulp.dest(config.paths.dist + "html/"));
});
