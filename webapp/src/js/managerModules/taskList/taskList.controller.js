/**
 * Created by Mei Xinlin on 2016/1/5.
 */
(function () {
    'use strict';

    angular
        .module('taskListModule')
        .controller('taskListController', taskListController);

    taskListController.$inject = ['taskListDataService','taskListService'];

    /* @ngInject */
    function taskListController(taskListDataService,taskListService) {
        /* jshint validthis: true */
        var vm = this;
        vm.title = 'taskListController';
        vm.TestA = undefined;
        vm.TestB = null;
        vm.reverse = reverse;
        activate();

        ////////////////


        function activate() {
            getAvengers();
            return true;
        }

        //To be unit test
        function reverse(name){
            return name.split("").reverse().join("");
        }

        function getAvengers() {
            return taskListDataService.getData()
                .then(function(response) {
                    var data = response.data;
                    if(data.code === '200') {
                        vm.taskList = taskListService.initTaskList(data.result);
                        console.log(vm.taskList);
                    }
                    return vm.taskList;
                });
        }
    }

})();

