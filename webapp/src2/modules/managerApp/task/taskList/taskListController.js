/**
 * Created by May on 2016/3/15.
 */
define("taskListController",["artTemplate","taskListService","jquery"],function (artTemplate,taskListService,$) {
    return {
        init:init,
        queryTaskList:queryTaskList
    };

    function init(){
        queryTaskList();
    }

    function renderTaskList(data){
        var listHtmlString;
        listHtmlString = artTemplate('task_taskList_tpl',{list:data});

        $("#taskListContainer").html(listHtmlString);

    }

   function queryTaskList (){

        taskListService.queryTaskList(renderTaskList);
    }
});
