/**
 * @desciption:
 * @author: Mei Xinlin
 */
(function () {
    'use strict';

    angular
        .module('utilsModule',[])
        .service('utils', utils);

    utils.$inject = [];

    /* @ngInject */
    function utils() {
      /* jshint validthis:true */
        this.copyObject = copyObject;

        function copyObject(source,target){
            target = target?target:{};
            for (var key in source) {
                target[key] = source[key];
            }
            return target;
        }
    }

})();


