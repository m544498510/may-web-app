/**
 * Created by May on 2016/3/15.
 */
define(["taskListDataService"],function (taskListDS) {
    return {
        queryTaskList: queryTaskList
    };

    function queryTaskList(){
        taskListDS.get(function(){
            console.log("service get taskList success.");
        });
    }
});
