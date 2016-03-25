var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var $ = require('gulp-load-plugins')();

gulp.task("amd", function () {

    return gulp.src("src2/modules/**/*.js")
        // Traces all modules and outputs them in the correct order.
        .pipe(amdOptimize("rjsLib",{
            baseUrl:"./src2/lib/",
            paths : {
                'jquery':'jquery/dist/jquery.min',
                'artTemplate':'artTemplate/dist/template',
                'StateMan':'stateman/stateman.min'
            },
            include:['jquery','artTemplate','StateMan'],
            //exclude:['jquery']
        }))
        .pipe($.concat("managerAppLib.js"))
    //    .pipe($.uglify())
        .pipe(gulp.dest("../webapp/dist/js/"))
        .pipe($.size());

});
