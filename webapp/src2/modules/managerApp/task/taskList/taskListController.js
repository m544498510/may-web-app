/**
 * Created by May on 2016/3/15.
 */
define(["taskListService"],function (taskListService) {

    return {
        queryTaskList:queryTaskList
    };

    function queryTaskList (){

        taskListService.queryTaskList();
    }
});
