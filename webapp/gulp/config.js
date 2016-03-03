/**
 *  gulp的配置文件
 *  用于定义各个app所需模块，之后将各个app按需合并压缩。
 *  @author: Mei XinLin
 */

//根目录为webWorkSpace
var appPath = '../webapp/';
var moduleSrcPath = './src/modules/';
var styleSrc = './src/sass';
var distPath = appPath+'dist/';

module.exports = {
    paths: {
        src: './src/',
        dist: distPath,

        scriptSrc: moduleSrcPath + '**/*.js',
        scriptDist: distPath + 'js/',

        styleSrc: styleSrc + '**/*.scss',
        styleDist: distPath + 'css/',

        htmlSrc: [
            './src/modules/**/*.html',
            './src/modules/**/*.jsp'
        ],
        htmlDist: distPath + 'html',

        imageSrc:'./src/img/**/*.*',
//        imageSrc:[
//            appPath + 'static/pages/img/**/*.*',
//            appPath + 'static/global/img/**/*.*'
//
//        ],
        imageDist: distPath + 'img/',

        rev: './src/revInfo/',

        oldSass: appPath + 'static/pages/css/'
    },

    apps: {
        appNames: ['managerApp'],
        managerApp: {
            js: [
                moduleSrcPath + 'managerApp/**/*.js',
                moduleSrcPath + 'common/**/*.js'
            ],
            styles: [
                moduleSrcPath + '/managerApp/**/*.scss',
                moduleSrcPath + 'common/**/*.scss'
            ],
            name: 'managerApp'
        }
    }
};
