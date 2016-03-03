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
                templateUrl: './dist/html/managerApp/taskList/taskList.view.html'
            });

        $urlRouterProvider.otherwise('/myTask');

    }

})();

