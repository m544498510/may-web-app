/**
 * Created by May on 2016/3/15.
 */
requirejs.config({
    baseUrl: './',
    paths: {
        'jquery':'dist/lib/jquery/dist/jquery.min',
        'artTemplate':'dist/lib/artTemplate/dist/template',
        'StateMan':'dist/lib/stateman/stateman.min'
    },
    shim: {
    }
});

define(['StateMan','taskListViewModule','testController'],function (StateMan,taskListViewModule,testController) {

    var stateman = new StateMan();

    stateman
        .state('myTask', function(){
            taskListViewModule.init();
        })
        .state('myRouterTest', function(){
            testController.init();
        })
        .on('notfound',function(){
            this.go('myTask');
        })
        .start();
});
