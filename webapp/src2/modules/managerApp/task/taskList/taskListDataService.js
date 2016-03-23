/**
 * Created by May on 2016/3/15.
 */
define(["jquery"],function ($) {
    return {
        get:get
    };

    function get(cb){
        $.ajax({
            url:"./task/getTask.json?task_status=0&pagesize=5&pagenum=1",
            type:"GET",
            success:function(result){
                cb(result);
            }
        });

    }

});
