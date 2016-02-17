/**
 * 保存通过修饰模式达成兄弟controller之间的
 * Created by Mei Xinlin on 2016/1/5.
 */
angular
    .module('MyApp')
    .config(['$provide', function($provide){
        $provide.decorator('$rootScope', ['$delegate', function($delegate){
            Object.defineProperty($delegate.constructor.prototype, '$onRootScope', {
                value: function(name, listener){
                    var unsubscribe = $delegate.$on(name, listener);
                    this.$on('$destroy', unsubscribe);
                    return unsubscribe;
                },
                enumerable: false
            });
            return $delegate;
        }]);
    }]);


angular
    .module('MyApp')
    .controller('MyController', ['$scope', function ($scope) {
        $scope.$onRootScope('someComponent.someCrazyEvent', function(){
            console.log('foo');
        });
    }
    ]);