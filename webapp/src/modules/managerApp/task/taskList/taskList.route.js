/**
 * Created by Mei Xinlin on 2016/3/3.
 */

(function() {
    'use strict';

    angular
        .module('taskListModule')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];

    /* @ngInject */
    function routeConfig($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('myTask', {
                url:'/myTask',
                title:'my task',
                templateUrl: './dist/html/managerApp/task/taskList/taskList.view.html'
            })
            .state('state', {
                url: '/a',
                template: '<a href="frame/test">go to mytask</a>',
                title:'test page'
            });

        $urlRouterProvider.otherwise('/myTask');

    }

})();

