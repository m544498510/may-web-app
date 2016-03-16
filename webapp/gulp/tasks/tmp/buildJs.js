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
            .pipe($.uglify())
            .pipe($.rev())
            .pipe(gulp.dest(config.paths.scriptDist))
            .pipe($.rev.manifest({
                merge: true
            }))
            .pipe(gulp.dest(config.paths.rev))
            .pipe(mainFilter.restore())

            .pipe(nMainFilter)
            .pipe($.concat(appNames[i]+'.js'))
            .pipe($.uglify())
            .pipe($.rev())
            .pipe(gulp.dest(config.paths.scriptDist))
            .pipe($.rev.manifest({
                base :config.paths.rev,
                merge: true
            }))
            .pipe(gulp.dest(config.paths.rev));

    }
    return result;
});
