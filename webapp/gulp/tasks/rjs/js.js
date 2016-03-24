var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var $ = require('gulp-load-plugins')();

gulp.task("amd", function () {

    return gulp.src("src2/modules/**/*.js")
        // Traces all modules and outputs them in the correct order.
        .pipe(amdOptimize("mangerApp.main",{
            baseUrl:"./dist/js/",
            paths : {
                'jquery':'../lib/jquery/dist/jquery.min',
                'artTemplate':'../lib/artTemplate/dist/template',
                'StateMan':'../lib/stateman/stateman.min'
            }
        }))
        .pipe($.concat("index.js"))
        .pipe(gulp.dest("dist/scripts"));

});
