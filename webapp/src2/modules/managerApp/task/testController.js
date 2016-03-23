/**
 * Created by May on 2016/3/15.
 */
define(["jquery","artTemplate","../../common/message/msgManager","./taskList/taskListService"],function ($,artTemplate,msgManager,taskListService) {
    var name = "testController";
    return {
        name:name,
        init:init,
        add:add
    };

    function add(a,b){
        return a+b;
    }

    function init(){
        var str = '<h1>router test</h1>';
        str += '<div id="routerTest"></div>';
        str += '<a href="frame/test1#/myTask">go to myTask</a>';
        $('#taskListContainer').html(str);
        registerListener();
    }

    function registerListener(){
        msgManager.addMsgListener("taskListChange",name,renderTaskList)
    }
    function renderTaskList(){
        console.log("testController get msg");
    }


});
