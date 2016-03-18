/**
 * Created by May on 2016/3/15.
 */
define("taskListViewModule",["jquery","artTemplate","msgManager","taskListService"],function ($,artTemplate,msgManager,taskListService) {
    var name = "taskListViewModule";
    return {
        name:name,
        init:init,
        queryTaskList:queryTaskList
    };

    function init(){
        registerListener();

        queryTaskList();
    }

    function registerListener(){
        msgManager.addMsgListener("taskListChange",name,renderTaskList)
    }

    function renderTaskList(data){
        var listHtmlString = artTemplate('task_taskList_tpl',{list:data});

        $("#taskListContainer").html(listHtmlString);
    }

   function queryTaskList (){

        taskListService.queryTaskList();
    }
});
