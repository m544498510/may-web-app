/**
 * Created by Mei Xinlin on 2016/3/4.
 */
(function () {
    'use strict';

    angular
        .module('jqPagnationModule', [])
        .constant('jqPagenationConf', getPagnationConfig());

    function getPagnationConfig() {
        return {
            pageBtnCount: 9,
            pageSize: 5,
            total: 0,
            debug: false,
            showJump: true,
            jumpBtnText: "跳转",
            firstBtnText: "首页",
            lastBtnText: "尾页"
        };
    }

})();

