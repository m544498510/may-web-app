/**
 * Created by Mei Xinlin on 2016/3/22.
 */
define([ 'jquery','managerApp/task/testController'], function($,a) {

    describe('test test', function() {

        it('add two number', function() {
            expect(a.add(1,2)).toEqual(3);
        });


    });

});
