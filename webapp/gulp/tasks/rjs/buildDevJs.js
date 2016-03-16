/**
 * Created by May on 2016/3/16.
 */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config2.js');

gulp.task('build:rjs',function(){
    var result,appConfig,
        mainFilter = $.filter("**/*.main.js",{restore:true}),
        nMainFilter = $.filter(['**/*.js', '!**/*.main.js'],{restore:true}),
        appNames = config.apps.appNames;

    for(var i = 0; i < appNames.length; i++){
        appConfig = config.apps[appNames[i]];
        result = gulp.src(appConfig.js)
            .pipe(mainFilter)
            .pipe(gulp.dest(config.paths.scriptDist))
            .pipe(mainFilter.restore())

            .pipe(nMainFilter)
            .pipe($.concat(appNames[i]+'.js'))
            .pipe(gulp.dest(config.paths.scriptDist))

    }
    return result;
});
