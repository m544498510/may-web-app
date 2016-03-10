/**
 * Created by Mei Xinlin on 2016/3/10.
 */
'use strict';

var gulp = require('gulp');
var config = require('./../../config.js');

/*
 * 转移国际化文件
 */
gulp.task('moveTranslate', function () {
    return gulp.src(config.paths.translateJson)
        .pipe(gulp.dest(config.paths.translateDist))
});
