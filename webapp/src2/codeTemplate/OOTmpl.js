/**
 * @author :    Mei XinLin
 * @version :   1.0
 */


define(["jquery"], function ($) {
    return construct;

    function construct(name) {      //声明一个构造函数
        var name = name;            //保存传入的变量
        return {
            name:name,
            init:init               //声明对外接口
        }
    }
    function init(){}
});


