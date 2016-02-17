'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('../../config.js');


/***
 *  clean task
 */
gulp.task('clean:production',['clean:styles','clean:scripts','clean:images','clean:html','clean:revInfo']);

