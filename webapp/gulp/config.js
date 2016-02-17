/**
 *  gulp的配置文件
 *  用于定义各个app所需模块，之后将各个app按需合并压缩。
 *  @author: Mei XinLin
 */

//根目录为webWorkSpace
var appPath = '../webapp/';
var jsSrcPath = './src/js/';
var styleSrc = './src/sass';

module.exports = {
  paths:{
    src: './src/',
    jsSrc: jsSrcPath,
    styleSrc: styleSrc,
    images:appPath+'dist/img/**/*.*',
    htmls:'./src/html/**/*.*',

    dist : appPath + 'dist/',
    rev: appPath + 'dist/revInfo/',

    oldSass: appPath + 'static/pages/css/'
  },
  apps:{
    appNames:['managerApp'],
    managerApp:{
      js:[
        jsSrcPath + 'managerModules/**/*.js',
        jsSrcPath + 'commonModules/**/*.js'
      ],
      styles:[
          styleSrc + '/managerApp/**/*.scss'
      ],
      view:[
        appPath + 'WEB-INF/newJsp/task/mytask.jsp'
      ],
      name: 'managerApp',
      dist: appPath + 'dist/js/'
    },
    catApp :{
      js:[
        jsSrcPath + 'catModules/**/*.js',
        jsSrcPath + 'commonModules/**/*.js'
      ],
      styles:[
        'src/sass/catApp/**/*.scss'
      ],
      name: 'catApp',
      dist: appPath + 'dist/js'
    }
  }
};
