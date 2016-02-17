<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%><%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"
+ request.getServerName() + ":" + request.getServerPort()
+ path + "/";

%><!DOCTYPE html>
<html class="no-js">
<head>
    <meta charset="UTF-8">
    <base href="<%=basePath%>">
    <title>我的任务-译马网</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--[if lt IE 9]>
    <meta http-equiv="refresh" content="0;url=<%=basePath%>/sorry-for-ie.html"/>
    <![endif]-->
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">

    <link rel="shortcut icon" href="favicon.ico"/>
    <link href="<%=basePath%>/static/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
    <link href="<%=basePath%>/static/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet"/>
    <link href="<%=basePath%>/static/global/plugins/bootstrap/css/bootstrap.css" rel="stylesheet"/>
    <link href="<%=basePath%>/static/global/plugins/jquery.uniform/css/uniform.default.css" rel="stylesheet"/>
    <%--
    <link href="<%=basePath%>/static/global/plugins/bootstrap-toastr/toastr.min.css" rel="stylesheet"/>
    --%>
    <link href="<%=basePath%>/static/global/css/components.css?_t=<%=new Date().getTime()%>" id="style_components"
          rel="stylesheet"/>
    <link href="<%=basePath%>/static/global/css/plugins.css?_t=<%=new Date().getTime()%>" rel="stylesheet"/>
    <link href="<%=basePath%>/static/layout/css/layout.css?_t=<%=new Date().getTime()%>" rel="stylesheet"/>
    <link href="<%=basePath%>/static/layout/css/themes/default.css?_t=<%=new Date().getTime()%>" rel="stylesheet"
          id="style_color"/>
    <link href="<%=basePath%>static/pages/css/create_project.css?_t=<%=new Date().getTime()%>" rel="stylesheet"/>

</head>
<body class="page-header-fixed">
<!-- BEGIN HEADER -->
<jsp:include page="${basePath }/frame/top.do"></jsp:include>
<!-- END HEADER -->
<div class="clearfix"></div>
<!-- BEGIN CONTAINER -->
<div class="page-container" ng-app="taskListModule">
    <!-- BEGIN SIDEBAR -->
    <jsp:include page="${basePath }/frame/left.do?menuId=${menuId }"></jsp:include>
    <!-- END SIDEBAR -->
    <!-- BEGIN CONTENT -->
    <div class="page-content-wrapper">
        <div class="page-content">
            <div class="mypro-tasklist-view" ng-controller="taskListController as taskListCtrl">

                <ul class="display-table task-head">
                    <li class="task-comp">所属团队</li>
                    <li>任务名称</li>
                    <li>截止时间</li>
                    <!-- <li>发布时间</li> -->
                    <li>字数</li>
                    <li class="task-finish">完成进度</li>
                    <li class="task-mount">挂载记忆库</li>
                    <li class="task-op">操作</li>
                </ul>

                <div class="mypro-tasklist" id="mytask">
                    <div ng-bind="taskListCtrl.title"></div>
                    <ul class="display-table task-item task-trans" ng-repeat="task in taskListCtrl.taskList">
                        <li class="task-comp" ng-bind="task.owner_name"></li>
                        <li class="task-name"><span>翻译</span><span ng-bind="task.doc_name"></span></li>
                        <li ng-bind="task.deadline_time"></li>
                        <li ng-bind="task.wordcount">字</li>
                        <li class="task-finish" ng-bind="task.finish"></li>
                        <li class="task-mount">
                            <div id="isMountMem_387">未挂载</div>
                            <button class="btn btn-circle js-mountCorpus" id="mountMemBut_387" tasksectorid="495"
                                    taskid="387" tasklabel_ids="2050_政治" trans_mem_id_list=""
                                    trans_term_id_list="null" tasksourcelangkey="zh-cn" tasktargetlangkey="en">添加
                            </button>
                        </li>
                        <li class="task-op"><i class="fa fa-check" title="已完成"></i><a
                                href="http://test.urelitetech.com.cn:80/cat/cathome?sectorId=495&amp;taskId=387"
                                class="btn btn-sm btn-circle" target="_blank">去翻译</a></li>
                    </ul>


                </div>
                <div class="mypro-notasklist hidden">
                    <span>你还没有任务哦！</span>

                    <div>如果你需要立即开始翻译工作，请先创建项目<br>
                        如果你在等待他人分配工作，请先加入他的团队
                    </div>
                    <div><a href="<%=path%>/team/teamIndex" class="btn btn-circle btn-blue-hollow">加入团队</a> &nbsp;
                        &nbsp; &nbsp; <a href="<%=path%>/projectManager/addProjectView"
                                         class="btn btn-circle btn-blue-hollow">创建项目</a></div>
                </div>

                <input type="hidden" id="pagenum" name="pagenum" value="1"/>
                <input type="hidden" id="pagesize" name="pagesize" value="5"/>
                <input type="hidden" name="task_status" id="task_status" value="0"/>

                <ul class="pagination pull-right" id="taskPager">

                </ul>

            </div>
        </div>
        <jsp:include page="${basePath }/frame/foot.do"></jsp:include>
    </div>
    <!-- END CONTENT -->
</div>
<!-- END CONTAINER -->
<template id="mountCorpus">
    <div class="modal-mountCorpus">
        <div class="input-icon right">
            <i class="fa fa-search" id='corpusSearch'></i>
            <input type="text" class="form-control" id="corpusKeyword" placeholder="输入关键字查找" value=""/>
        </div>
        <div class="clearfix"></div>
        <div class="cropus-list" id="trans_cropus-list"></div>
        <ul class="pagination pull-right" id="cropus_taskPager"></ul>
        <div class="clearfix"></div>
        <input type="hidden" id="corpus_pagenum" name="corpus_pagenum" value="1"/>
        <input type="hidden" id="corpus_pagesize" name="corpus_pagesize" value="5"/>

        <div class="text-align-center margin-top-15">
            <button class="btn btn-blue btn-small input-small">确定</button>
        </div>
    </div>
</template>


<script src="<%=basePath%>static/global/plugins/jquery.min.js"></script>
<script src="<%=basePath%>static/global/plugins/jquery.uniform/jquery.uniform.js"></script>
<script src="<%=basePath%>static/global/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js"></script>
<script src="<%=basePath%>static/global/plugins/bootstrap/js/bootstrap.js"></script>
<script src="<%=basePath%>static/global/plugins/bootbox/bootbox.js"></script>
<script src="<%=basePath%>static/layout/scripts/layout.js"></script>
<script src="<%=basePath%>static/layout/scripts/utils.js"></script>
<script src="<%=basePath%>apps/build/lib/angular/angular.min.js"></script>

<link href="./create_project.css" rel="stylesheet"/>
<script src="./dist/js/managerApp.js"></script>
<%--
<script src="./src/js/managerModules/taskList/taskList.controller.js"></script>
--%>
</body>
</html>
