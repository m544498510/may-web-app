/**
 * Created by Mei Xinlin on 2016/1/5.
 */
(function() {
    'use strict';

    angular
        .module('taskListDataServiceModule',[])
        .factory('taskListDataService', taskListDataService);

    taskListDataService.$inject = ['$http'];

    function taskListDataService($http) {
        return {
            getData: getData
        };
        function getData(pageNum,taskStatus,pageSize) {
            pageNum = pageNum ? pageNum : 1;
            pageSize = pageSize ? pageSize : 25;
            taskStatus = taskStatus ? taskStatus : 0;
            var config ={
                method: 'GET',
                url: './task/getTask.json',
                params : {
                    task_status : taskStatus,
                    pagesize : pageSize,
                    pagenum : pageNum
                }
            };
            return $http(config);
        }
    }
})();


