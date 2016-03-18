/**
 * Created by May on 2016/3/15.
 */
requirejs.config({
    baseUrl: './',
    paths: {
        'jquery':'dist/lib/jquery/dist/jquery.min',
        'artTemplate':'dist/lib/artTemplate/dist/template'
    },
    shim: {
    }
});

define(["taskListViewModule","testController"],function (a,b) {
    a.init();
    b.init();
});
