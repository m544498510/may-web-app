/**
 * Created by May on 2016/3/15.
 */
define("taskListDataService",["jquery"],function ($) {
    return {
        get:get
    };

    function get(cb){
        $.ajax({
            url:"/task/getTask?task_status=0&pagesize=5&pagenum=1",
            success:function(result){
                console.log(result);
                cb(result);
            },
            params : {
                task_status : 0,
                pagesize : 5,
                pagenum : 1
            }
        });

    }

});
