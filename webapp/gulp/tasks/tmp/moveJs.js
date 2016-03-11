/**
 * Created by Mei Xinlin on 2016/3/3.
 */
'use strict';

var gulp = require('gulp');
var config = require('./../../config.js');

/*
 * 删除图片无关信息
 */
gulp.task('move:js', function () {
    return gulp.src(config.paths.scriptSrc)
        .pipe(gulp.dest(config.paths.scriptDist))
});
