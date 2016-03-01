/**
 * Created by Mei Xinlin on 2016/3/1.
 */
'use strict';

var gulp = require('gulp');
var config = require('./../../config.js');

gulp.task('moveJs', function () {
    return gulp.src(config.paths.scriptSrc)
        .pipe(gulp.dest(config.paths.scriptDist))
});
