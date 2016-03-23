/*
 * This is an example build file that demonstrates how to use the build system for
 * require.js.
 *
 * THIS BUILD FILE WILL NOT WORK. It is referencing paths that probably
 * do not exist on your machine. Just use it as a guide.
 *
 *
 */
({
    // app顶级目录，非必选项。如果指定值，baseUrl则会以此为相对路径
    appDir: '../',

    // 模块根目录。默认情况下所有模块资源都相对此目录。
    // 若该值未指定，模块则相对build文件所在目录。
    // 若appDir值已指定，模块根目录baseUrl则相对appDir。
    baseUrl: "./src2/modules/",

    // 配置文件目录
    mainConfigFile: './modules/managerApp/managerApp.main.js',

    // 指定输出目录，若值未指定，则相对 build 文件所在目录
    dir: "../dist/",


})
