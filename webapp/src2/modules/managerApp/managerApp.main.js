/**
 * Created by May on 2016/3/15.
 */
requirejs(['StateMan','managerApp/task/taskList/taskListViewModule','managerApp/task/testController'],function (StateMan,taskListViewModule,testController) {

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
