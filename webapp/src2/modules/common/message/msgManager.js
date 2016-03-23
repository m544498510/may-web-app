/**
 * Created by May on 2016/3/17.
 */
define(function () {
    var msgMap = {};
    return {
        sendMsg:sendMsg,
        broadcastMsg:broadcastMsg,
        addMsgListener : addMsgListener,
        removeMsgListener : removeMsgListener
    };

    function broadcastMsg(msgId,msgData){
        var callback,
            listenerMap = msgMap[msgId];
        if(listenerMap){
            for (var key in listenerMap) {
                callback = listenerMap[key].callback;
                if(callback && typeof callback === "function"){
                    callback(msgData);
                }
            }
        }
    }

    function sendMsg(msgId,msgData,targetIds){
        var listenerMap = msgMap[msgId];
        if(listenerMap){
            for (var i = 0; i < targetIds.length; i++) {
                var target = listenerMap[targetIds[i]];
                if(target && target.callback
                        && typeof target.callback === "function") {

                    target.callback(msgData);
                }
            }
        }
    }

    function addMsgListener(msgId,listenerId,callback){
        var listenerMap = msgMap[msgId];
        if(!listenerMap){
            listenerMap = {};
            msgMap[msgId] = listenerMap;
        }
        listenerMap[listenerId] = {
            id: listenerId,
            callback:callback
        };
    }

    function removeMsgListener(msgId,listenerId){
        var listenerMap = msgMap[msgId];
        if(listenerMap){
            delete listenerMap[listenerId];
        }
    }

});
