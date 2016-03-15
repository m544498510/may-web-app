/**
 * Created by May on 2016/3/15.
 */
requirejs.config({
    baseUrl: './',
    paths: {
        'jquery':'dist/jquery/dist/jquery.min'
    },
    shim: {
    }
});

define(["../taskList/taskListController"],function () {
    return {};
});
