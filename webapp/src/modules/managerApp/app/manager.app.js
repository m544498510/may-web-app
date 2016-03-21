/**
 * Created by Mei Xinlin on 2016/1/22.
 */
(function () {
    'use strict';

    angular
        .module('managerApp', [
            'ngCookies',
            'ui.router',                //路由
            'pascalprecht.translate',   //18n

            'utilsModule',
            'managerDataServiceModule',
            'jqPagnationModule',

            'taskListModule'
        ])
        .run(['$rootScope', '$state', '$stateParams',
                function ($rootScope,   $state,   $stateParams) {

                    $rootScope.$statemxl = $state;
                    $rootScope.$stateParams = $stateParams;
                }
            ]
        )
        .config(function($translateProvider) {
            $translateProvider
                .useStaticFilesLoader({
                    prefix: './dist/nls/i18n/',
                    suffix: '.jsonData'
                })
                .preferredLanguage('zh_cn')
                .fallbackLanguage(['en']).useLocalStorage();
        });

})();
