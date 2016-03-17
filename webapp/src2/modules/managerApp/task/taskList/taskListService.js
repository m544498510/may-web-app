/**
 * Created by May on 2016/3/15.
 */
define("taskListService",["taskListDataService"],function (taskListDS) {
    var taskTypeMap = {
        '1': {
            typeName: '翻译',
            buttonVal: '去翻译',
            typeClass: 'task-trans'
        },
        '2': {
            typeName: '编辑',
            buttonVal: '去编辑',
            typeClass: 'tansk-edit'
        },
        '3': {
            typeName: '校对',
            buttonVal: '去校对',
            typeClass: 'tansk-collate'
        }
    };

    return {
        queryTaskList: queryTaskList
    };

    function queryTaskList(cb){
        taskListDS.get(function(data){
            cb(initTaskList(data.result));
        });
    }

    function initTaskList(list) {
        var taskList = [];
        for (var i = 0; i < list.length; i++) {
            var task = getTask(list[i]);
            taskList.push(task);
        }
        return taskList;
    }
    function getTask(attrMaps){
        var task = copyObject(attrMaps);
        task.finish =  Math.floor(task.finish_per*100)+'%';

        task = copyObject(taskTypeMap[task.tasktype],task);

        //3是已终止，4是删除
        if(task.task_status === 3 || task.task_status === 4){
            task.buttonVal = '去查看';
            task.typeClass = 'task-stop';
        }
        if(task.finish_per == 1){
            task.typeClass += " task-finish";
        }
        return task;
    }
    function copyObject(source, target) {
        target = target ? target : {};
        for (var key in source) {
            target[key] = source[key];
        }
        return target;
    }

});
