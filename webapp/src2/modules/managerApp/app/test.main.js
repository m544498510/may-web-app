/**
 * Created by May on 2016/3/15.
 */
requirejs.config({
    baseUrl: '../../../',
    paths: {
        'jquery':'dist/lib/jquery/dist/jquery.min'
    },
    shim: {
    }
});

define(["taskListController"],function (a) {
    a.queryTaskList();
    return {};
});
