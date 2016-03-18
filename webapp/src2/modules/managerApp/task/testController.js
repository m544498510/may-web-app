/**
 * Created by May on 2016/3/15.
 */
define("testController",["jquery","artTemplate","msgManager","taskListService"],function ($,artTemplate,msgManager,taskListService) {
    var name = "testController";
    return {
        name:name,
        init:init
    };

    function init(){
        registerListener();
    }

    function registerListener(){
        msgManager.addMsgListener("taskListChange",name,renderTaskList)
    }
    function renderTaskList(){
        console.log("testController get msg");
    }


});
