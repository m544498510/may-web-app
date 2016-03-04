/**
 * Created by Mei Xinlin on 2016/1/22.
 */
(function () {
    'use strict';

    angular
        .module('managerApp', [
            'ui.router',

            'utilsModule',
            'taskListDataServiceModule',
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

})();
