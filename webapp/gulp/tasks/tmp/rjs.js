var gulp = require('gulp'),
    rjs = require('gulp-requirejs');

gulp.task('rjs', function() {
    rjs({
        baseUrl: '../webapp/static/app.js',
        out: 'abc.js'
    })
        .pipe(gulp.dest('../dist/js/')); // pipe it to the output DIR
});
