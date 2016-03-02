/**
 * Created by Mei Xinlin on 2016/1/22.
 */
(function () {
    'use strict';

    angular
        .module('managerApp', [
            'taskListModule',
            'ui.router'
        ])
        .config(routeConfig);


        routeConfig.$inject = ['$stateProvider'];
        /* @ngInject */
        function routeConfig ($stateProvider) {
            $stateProvider
                .state('myTask', {
                    url:'/myTask',
                    templateUrl: './dist/html/managerModules/taskList/taskList.view.html'
                })
                .state('a', {
                    url: '^/mytask',
                    template: '<h1>Welcome to your inbox</h1>'
                })
                .state('myTask.a',{
                    url:'/myTask?a&b',
                    template:'<div>asd</div>'
                })
/*
                .otherwise({
                    redirectTo: '/myTask'
                });
*/
        }


})();
