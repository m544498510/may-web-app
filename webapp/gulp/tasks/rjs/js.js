var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var $ = require('gulp-load-plugins')();

gulp.task("amd", function () {

    return gulp.src("src2/modules/**/*.js")
        // Traces all modules and outputs them in the correct order.
        .pipe(amdOptimize("managerApp/managerApp.main",{
            baseUrl:"./src2/modules/",
            paths : {
                'jquery':'../lib/jquery/dist/jquery.min',
                'artTemplate':'../lib/artTemplate/dist/template',
                'StateMan':'../lib/stateman/stateman.min'
            },
/*
            exclude:[
                'artTemplate','jquery','StateMan'
            ]
*/
        }))
        .pipe($.sourcemaps.init({
            loadMaps:true
        }))
        .pipe($.concat("app.js"))
        .pipe($.uglify())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest("../webapp/dist/js/"));

});
