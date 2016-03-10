/**
 * Created by Mei Xinlin on 2016/1/22.
 */
(function () {
    'use strict';

    angular
        .module('managerApp', [
            'ui.router',                //路由
            'pascalprecht.translate',   //18n
            'ngCookies',                //cookies

            'utilsModule',
            'managerDataServiceModule',
            'jqPagnationModule',

            'taskListModule'
        ])
        .run(['$rootScope', '$state', '$stateParams',
                function ($rootScope,   $state,   $stateParams) {

                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;
                }
            ]
        )
        .config(function($translateProvider) {
            $translateProvider
                .useStaticFilesLoader({
                    prefix: './dist/18n',
                    suffix: '.json'
                });
        });

})();
