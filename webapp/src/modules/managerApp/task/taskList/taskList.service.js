/**
 * Created by Mei Xinlin on 2016/1/5.
 */
(function () {
    'use strict';

    angular
        .module('taskListModule')
        .constant('taskTypeMap',getTaskTypeMap())
        .factory('taskListService', taskListService);

    taskListService.$inject = ['taskTypeMap','commonUtils'];

    /**
     * taskListService Factory
     * @namespace taskListService
     */
    function taskListService(taskTypeMap,commonUtils) {
        var service = {
            initTaskList: initTaskList
        };
        return service;

        ////////////////



        function initTaskList(list) {
            var taskList = [];
            for (var i = 0; i < list.length; i++) {
                var task = getTask(list[i]);
                taskList.push(task);
            }
            return taskList;
        }
        function getTask(attrMaps){
            var task = commonUtils.copyObject(attrMaps);
            task.finish =  Math.floor(task.finish_per*100)+'%';

            task = commonUtils.copyObject(taskTypeMap[task.tasktype],task)

            //3是已终止，4是删除
            if(task.task_status === 3 || task.task_status === 4){
                task.buttonVal = '去查看';
                task.typeClass = 'task-stop';
            }
            if(task.finish_per == 1){
                task.typeClass += " task-finish";
            }
            return task;
        }
    }

    function getTaskTypeMap() {
        return {
            '1': {
                typeName: '翻译',
                buttonVal: '去翻译',
                typeClass: 'task-trans'
            },
            '2': {
                typeName: '编辑',
                buttonVal: '去编辑',
                typeClass: 'tansk-edit'
            },
            '3': {
                typeName: '校对',
                buttonVal: '去校对',
                typeClass: 'tansk-collate'
            }
        };
    }

})();

