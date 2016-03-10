<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
        + request.getServerName() + ":" + request.getServerPort()
        + path + "/";

%>
<!DOCTYPE html>
<html class="no-js" ng-app="managerApp">
<head >
    <meta charset="UTF-8">
    <base href="../">
    <title ng-bind="$state.current.title">test</title>
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
        <link href="<%=basePath%>/static/global/plugins/bootstrap-toastr/toastr.min.css" rel="stylesheet" /> --%>
    <link href="<%=basePath%>/static/global/css/components.css?_t=<%=new Date().getTime()%>" id="style_components"
          rel="stylesheet"/>
    <link href="<%=basePath%>/static/global/css/plugins.css?_t=<%=new Date().getTime()%>" rel="stylesheet"/>
    <link href="<%=basePath%>/static/layout/css/layout.css?_t=<%=new Date().getTime()%>" rel="stylesheet"/>
    <link href="<%=basePath%>/static/layout/css/themes/default.css?_t=<%=new Date().getTime()%>" rel="stylesheet"
          id="style_color"/>
    <link href="<%=basePath%>static/pages/css/create_project_new.css?_t=<%=new Date().getTime()%>" rel="stylesheet"/>
    <link rel="stylesheet" href="<%=basePath%>static/global/plugins/Mricode.Pagination/mricode.pagination.css">

</head>
<body class="page-header-fixed" >
    <!-- BEGIN HEADER -->
    <jsp:include page="${basePath }/frame/top.do"></jsp:include>
    <!-- END HEADER -->

    <div class="clearfix"></div>

    <!-- BEGIN CONTAINER -->
    <div class="page-container">
        <!-- BEGIN SIDEBAR -->
        <jsp:include page="${basePath }/frame/left.do?menuId=${menuId }"></jsp:include>
        <!-- END SIDEBAR -->

        <!-- BEGIN CONTENT -->
        <div class="page-content-wrapper">
            <div class="page-content">

                <div ui-view></div>


                <jsp:include page="${basePath }/frame/foot.do"></jsp:include>
            </div>
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
            <div class="cropus-list" id="trans_cropus-list">
                <!--
                <ul class="display-table ">
                    <li>记忆文件名称.tmx</li>
                    <li>教育课程</li>
                    <li><label><input type="checkbox">使用</label></li>
                </ul>
                -->
            </div>
            <ul class="m-pagination pull-right" id="cropus_taskPager"></ul>
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
    <script src="<%=basePath%>static/global/plugins/Mricode.Pagination/mricode.pagination.js"></script>

    <script src="./dist/lib/angular/angular.js"></script>
    <script src="./dist/lib/angular/angular-ui-router.min.js"></script>
    <script src="./dist/lib/angular/angular-translate.min.js"></script>
    <script src="./dist/lib/angular/angular-cookies.min.js"></script>


    <script src="./dist/js/managerApp.js"></script>

<%--
    <script src="./dist/js/managerApp/task/taskList/taskList.module.js"></script>
    <script src="./dist/js/managerApp/app/manager.app.js"></script>
    <script src="./dist/js/common/utils/utils.module.js"></script>
    <script src="./dist/js/managerApp/dataServices/taskList.dataService.js"></script>
    <script src="./dist/js/managerApp/jqPagnation/jqPagnation.module.js"></script>



    <script src="./dist/js/managerApp/task/taskList/taskList.controller.js"></script>
    <script src="./dist/js/managerApp/task/taskList/taskList.service.js"></script>
    <script src="./dist/js/managerApp/task/taskList/taskList.route.js"></script>
--%>

</body>
</html>
