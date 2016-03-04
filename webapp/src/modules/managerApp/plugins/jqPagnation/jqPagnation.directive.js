/**
 * Created by Mei Xinlin on 2016/3/1.
 */

(function () {
    'use strict';

    angular
        .module('jqPagnationModule')
        .directive('jqPagnation', pagnation);

    pagnation.$inject = ['commonUtils', 'jqPagenationConf'];

    /* @ngInject */
    function pagnation(commonUtils, jqPagenationConf) {
        var directive = {
            link: link,
            restrict: 'E',
            template: '<ul class="m-pagination pull-right" id="taskPager"></ul>',
            replace: true,
            scope: {
                config: "="
            }
        };
        return directive;

        function link(scope, element, attrs) {
            var config = scope.config;
            if (config) {
                config = commonUtils.copyObject(config, jqPagenationConf);
            } else {
                config = jqPagenationConf;
            }
            $(element).pagination(config)
                .on("jumpClicked", onChange)
                .on("pageClicked", onChange);

            scope.$watch(function() {
                var newValue = scope.config.total;
                return newValue;
            }, function(){
                $(element).pagination('render', [scope.config.total]);
            });


            function onChange(evt, data) {
                if (config.onChange) {
                    config.onChange(data);
                }
            }
        }
    }
})();

