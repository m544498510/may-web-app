/**
 * Created by Mei Xinlin on 2016/2/17.
 */
'use strict';

var gulp = require('gulp');
var config = require('./../../config.js');

gulp.task("buildHtml",function(){
    return gulp.src(config.paths.htmls)
        .pipe(gulp.dest(config.paths.dist + "html/"));
});
