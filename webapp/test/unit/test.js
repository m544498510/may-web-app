'use strict';

describe('Controller: taskListCtrl', function () {

    // load the controller's module
    beforeEach(module('taskListModule'));

    var taskListCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        taskListCtrl = $controller('taskListController', {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it('controller attr', function () {
        expect(taskListCtrl.title).toEqual("taskListController");
    });

    it('test',function(){
        expect("DCBA").toEqual(taskListCtrl.reverse("ABCD"));
        expect("Conan").toEqual(taskListCtrl.reverse("nanoC"));
    });
});
