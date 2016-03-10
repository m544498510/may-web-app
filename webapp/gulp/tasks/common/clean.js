'use strict';

var gulp = require('gulp');
var config = require('../../config.js');


/***
 *  clean task
 */
gulp.task('clean',['clean:styles','clean:scripts','clean:html','clean:img','clean:revInfo','clean:translate']);

