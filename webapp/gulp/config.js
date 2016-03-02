/**
 *  gulp的配置文件
 *  用于定义各个app所需模块，之后将各个app按需合并压缩。
 *  @author: Mei XinLin
 */

//根目录为webWorkSpace
var appPath = '../webapp/';
var jsSrcPath = './src/js/';
var styleSrc = './src/sass';
var distPath = appPath+'dist/';

module.exports = {
    paths: {
        src: './src/',
        dist: distPath,

        scriptSrc: jsSrcPath + '**/*.js',
        scriptDist: distPath + 'js/',

        styleSrc: styleSrc + '**/*.scss',
        styleDist: distPath + 'css/',

        htmlSrc: './src/html/pages/**/*.*',
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
                jsSrcPath + 'managerModules/**/*.js',
                jsSrcPath + 'commonModules/**/*.js'
            ],
            styles: [
                styleSrc + '/managerApp/**/*.scss'
            ],
            view: [
                appPath + 'WEB-INF/newJsp/task/mytask.jsp'
            ],
            name: 'managerApp'
        },
        catApp: {
            js: [
                jsSrcPath + 'catModules/**/*.js',
                jsSrcPath + 'commonModules/**/*.js'
            ],
            styles: [
                'src/sass/catApp/**/*.scss'
            ],
            name: 'catApp'
        }
    }
};
