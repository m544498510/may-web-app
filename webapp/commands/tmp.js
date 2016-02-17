
var basePath = "<%=basePath%>";
(function() {
    getTask(1, 1);
    Layout.init();
})();

function getTask(task_status, pagenum){
    var pagesize = $("#pagesize").val();
    $("#pagenum").val(pagenum);
    $("#task_status").val(task_status);
    $.ajax({
        dataType:"text",
        async:false,
        contentType:"application/json",
        url:basePath+"/task/getTask.json",
        data:{ task_status : task_status, pagesize : pagesize, pagenum : pagenum},
        success:function(data){
            data = JSON.parse(data);
            var html = "";
            if(data.code == "200"){
                var tasks = data.result;
                for(var i=0;i<tasks.length;i++){
                    var task = tasks[i];
                    var finish = Math.floor(task.finish_per*100);//完成进度
                    var typeClass = "task-trans";//任务类型不同，css的class不一样（默认：去翻译）
                    var typeName = "翻译";//任务名称列中的任务类型
                    var buttonVal = "去翻译";//操作列中按钮的显示
                    if(task.tasktype == 2){//去编辑
                        typeName = "编辑";
                        buttonVal = "去编辑";
                        typeClass = "tansk-edit";
                    }else if(task.tasktype == 3){//去校对
                        typeName = "校对";
                        buttonVal = "去校对";
                        typeClass = "tansk-collate";
                    }
                    if(task.task_status == 3 || task.task_status == 4){//3是已终止，4是删除
                        buttonVal = "去查看";
                        typeClass = "task-stop";
                    }
                    var isMountMem = "未挂载";//译员挂载记忆库列是否挂载（默认：未挂载）
                    var insertOrUpdateMem = "添加";//译员挂载记忆库列按钮显示字样
                    var trans_mem_id_list = "";
                    if(task.trans_mem_id_list != null && task.trans_mem_id_list.length > 0){
                        trans_mem_id_list = task.trans_mem_id_list;
                        isMountMem = "已挂载";
                        insertOrUpdateMem = "修改";
                    }
                    if(finish == 100){
                        //buttonVal = "去查看";
                        typeClass += " task-finish";
                    }

                    html += "<ul class='display-table task-item "+ typeClass +"'>";
                    html += "<li class='task-comp'>"+ task.owner_name+ "</li>";
                    html += "<li class='task-name'><span>"+ typeName +"</span>-"+ task.doc_name +"</li>";
                    //html += "<li>"+ Util.UnixToDate(task.deadline_time, true) +"</li>";
                    html += "<li>"+ task.deadline_time +"</li>";
                    //html += "<li>"+ task.start_time +"</li>";
                    html += "<li>"+ task.wordcount +"字</li>";
                    html += "<li class='task-finish'>"+ finish +"%</li>";
                    html += "<li class='task-mount'>";
                    html += "<div id='isMountMem_"+task.task_id+"'>"+isMountMem+"</div>";
                    if(task.task_status != 3 && task.task_status != 4 && finish != 100){//3是已终止，4是删除,finish != 100表示未完成
                        html += '<button class="btn btn-circle js-mountCorpus" id="mountMemBut_'+task.task_id+'" taskSectorId="'+task.sector_id+'" taskId="'+task.task_id+'" '+
                        ' tasklabel_ids="'+task.label_idname_list+'" trans_mem_id_list="'+trans_mem_id_list+'" trans_term_id_list="'+task.trans_term_id_list+'"'+
                        ' taskSourcelangkey="'+task.sourcelangkey+'" taskTargetlangkey="'+task.targetlangkey+'">'+insertOrUpdateMem+'</button>';
                    }
                    html += "</li>";
                    html += "<li class='task-op'>";
                    html += "<i class='fa fa-check' title='已完成'></i>";
                    html += "<a href='<%=basePath%>cat/cathome?sectorId="+task.sector_id+"&taskId="+task.task_id+"'"+
                    "class='btn btn-sm btn-circle' target='_blank'>"+ buttonVal +"</a>";
                    html += "</li>";
                    html += "</ul>";
                }
                if(html != ""){
                    $("#mytask").html(html);
                    var pagecount;
                    if (data.pageinfo.pagecount % data.pageinfo.pagesize == 0) {
                        pagecount = parseInt(data.pageinfo.pagecount/data.pageinfo.pagesize);
                    } else {
                        pagecount = parseInt(data.pageinfo.pagecount/data.pageinfo.pagesize) + 1;
                    }
                    $('#taskPager').twbsPagination({
                        totalPages: pagecount,
                        visiblePages: 5,
                        onPageClick: function (event, page) {
                            getTask(task_status, page);
                        }
                    });
                }else{
                    if(task_status == 2){
                        $("#mytask").html('<ul><h3 style="width:100%;text-align:center;color:#cdcdcd">没有已完成的任务</h3></ul>');
                    }else{
                        $('.mypro-notasklist').removeClass('hidden').show();
                    }
                    $("#taskPager").hide();
                }
                Layout.init();
                initMountCorpus();
            }else{

            }
        }
    });
}

//译员挂记忆库列表
function initMountCorpus() {
    $('.js-mountCorpus').off('click').on('click',function(){
        var clickDom = $(this);
        bootbox.dialog({
            title: "挂载记忆库",
            message: $("#mountCorpus").html(),
            inits: function(){
                //查询数据
                getTransCropusList("",clickDom,1);
                searchTransCropus(clickDom);
            },
            onEscape: function() {
            }
        });
        $('#corpusKeyword').on('keydown',function(e){
            if(e.keyCode == 13){
                $('#corpusSearch').trigger('click');
            }
        });
    });
};

function getTransCropusList(corpusKeyword, clickDom, pagenum){
    var pagesize = $("#corpus_pagesize").val();
    $("#corpus_pagenum").val(pagenum);
    var label_ids = clickDom.attr('tasklabel_ids');
    var sourcelangkey = clickDom.attr('taskSourcelangkey');
    var targetlangkey = clickDom.attr('taskTargetlangkey');
    var trans_mem_id_list = clickDom.attr('trans_mem_id_list');//译员增加记忆库str
    var trans_mem_ids = "";//译员增加记忆库数组
    if(trans_mem_id_list != ""){
        trans_mem_ids = trans_mem_id_list.split(",");
    }
    var trans_term_id_list = clickDom.attr('trans_term_id_list');//译员增加术语库
    $.ajax({
        dataType : "text",
        async : false,
        contentType : "application/json",
        url : basePath+"/task/transCropusList.json",
        data : {corpusKeyword:encodeURI(corpusKeyword), label_ids:encodeURI(label_ids), sourcelangkey:sourcelangkey, targetlangkey:targetlangkey, pagesize:pagesize, pagenum:pagenum},
        success : function(data){
            data = JSON.parse(data);
            if(data.code == "200"){
                var html = "";
                for(var i = 0;i<data.result.length;i++){
                    var cropus = data.result[i];
                    var lablename = "";
                    for(var l=0;l<cropus.label_idname_list.length;l++){
                        var labels = cropus.label_idname_list[l].split("_");
                        lablename += labels[1];
                        if(l != cropus.label_idname_list.length-1){
                            lablename += "、";
                        }
                    }
                    var labelstr = (lablename.length>=10)?(lablename.substring(0,10)+"..."):lablename;
                    var isChecked = "";//是否使用
                    if(trans_mem_ids != ""){
                        for(var l=0;l<trans_mem_ids.length;l++){
                            if(cropus.tmx_dbid == trans_mem_ids[l]){
                                isChecked = "checked";
                            }
                        }
                    }
                    html += '<ul class="display-table ">';
                    html += '<li>'+cropus.tmx_dbname+'</li>';
                    html += '<li title="'+lablename+'">'+labelstr+'</li>';
                    html += '<li><label><input name="cbxTransCropus" type="checkbox" value="'+cropus.tmx_dbid+'" '+isChecked+'>使用</label></li>';
                    html += '</ul>';
                }
                if(html == ""){
                    html = "<ul class='display-table task-item' style='text-align:center'>没有记忆库</ul>";
                } else {
                    var pagecount;
                    if (data.pagecount % data.pagesize == 0) {
                        pagecount = parseInt(data.pagecount/data.pagesize);
                    } else {
                        pagecount = parseInt(data.pagecount/data.pagesize) + 1;
                    }
                    $('#cropus_taskPager').twbsPagination({
                        totalPages: pagecount,
                        visiblePages: 5,
                        onPageClick: function (event, page) {
                            getTransCropusList(corpusKeyword, clickDom, page);
                        }
                    });
                }
                $("#trans_cropus-list").html(html);
                addTransCropus(clickDom);
            }

            if($('.js-mountCorpus .checker').size()>0) {
                $('input[type="checkbox"]').uniform.update();
            }else {
                $('input[type="checkbox"]').uniform();
            }
        }
    });
}

//记忆库搜索
function searchTransCropus(clickDom){
    $('i.fa-search').off('click').on('click',function(){
        var corpusKeyword = $("#corpusKeyword").val();
        getTransCropusList(corpusKeyword, clickDom,1);
    });
}

//确认按钮
function addTransCropus(clickDom){
    $('.input-small').off('click').on('click',function(){
        var sector_id = clickDom.attr('taskSectorId');
        var task_id = clickDom.attr('taskId');
        var ids = "";
        $('input:checkbox[name=cbxTransCropus]:checked').each(function(i){
            if(0==i){
                ids = $(this).val();
            }else{
                ids += (","+$(this).val());
            }
        });
        $.ajax({
            dataType:"text",
            contentType:"application/json",
            url : basePath+"/task/addTransCropus.json",
            data : {sector_id : sector_id, task_id : task_id, cropusIds : ids},
            success : function(data){
                data = JSON.parse(data);
                if(data.code == "200"){
                    bootbox.alert({
                        message: data.message,
                        size:"small",
                        callback:function(){
                            clickDom.attr('trans_mem_id_list', ids);
                            if(ids == ""){//表示取消挂载
                                $("#isMountMem_"+task_id).html("未挂载");
                                $("#mountMemBut_"+task_id).html("添加");
                            }else{
                                $("#isMountMem_"+task_id).html("已挂载");
                                $("#mountMemBut_"+task_id).html("修改");
                            }
                            bootbox.hideAll();//关闭弹出窗
                        }
                    });
                }
            }
        });
    });
}


