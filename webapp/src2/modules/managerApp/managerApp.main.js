/**
 * Created by May on 2016/3/15.
 */
requirejs.config({
    baseUrl: './src2/modules/',
    paths: {
        'jquery':'../lib/jquery/dist/jquery.min',
        'artTemplate':'../lib/artTemplate/dist/template',
        'StateMan':'../lib/stateman/stateman.min'
    },
    shim: {
    }
});

define(['StateMan','task/taskList/taskListViewModule','task/testController'],function (StateMan,taskListViewModule,testController) {

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
