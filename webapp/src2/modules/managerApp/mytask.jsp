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

                <!-- BEGIN taskList -->
                <!--=include ../task/taskList/taskList.html -->
                <!-- END taskList -->


                <jsp:include page="${basePath }/frame/foot.do"></jsp:include>
            </div>
        </div>
        <!-- END CONTENT -->
    </div>


    <script src="<%=basePath%>static/global/plugins/jquery.min.js"></script>
    <script src="<%=basePath%>static/global/plugins/jquery.uniform/jquery.uniform.js"></script>
    <script src="<%=basePath%>static/global/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js"></script>
    <script src="<%=basePath%>static/global/plugins/bootstrap/js/bootstrap.js"></script>
    <script src="<%=basePath%>static/global/plugins/bootbox/bootbox.js"></script>
    <script src="<%=basePath%>static/layout/scripts/layout.js"></script>
    <script src="<%=basePath%>static/layout/scripts/utils.js"></script>
    <script src="<%=basePath%>static/global/plugins/Mricode.Pagination/mricode.pagination.js"></script>



    <script data-main="./dist/js/app/test.main.js" src="./dist/lib/requirejs/require.js"></script>
    <script  src="./dist/js/testApp.js"></script>


</body>
</html>
