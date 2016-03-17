/**
 * Created by May on 2016/3/17.
 */
define('msgManager',function () {
    var msgMap = {};
    return {
        broadcastMsg:broadcastMsg,
        addMsgListener : addMsgListener,
        removeMsgListener : removeMsgListener
    };

    function broadcastMsg(msgId,msgData){
        var callback,
            listenerList = msgMap[msgId];
        if(listenerList){
            for (var i = 0; i < listenerList.length; i++) {
                callback = listenerList[i].callback;
                if(callback && typeof callback === "function"){
                    callback(msgData);
                }
            }
        }
    }

    function addMsgListener(msgId,listenerId,callback){
        var listenerList = msgMap[msgId];
        if(!listenerList){
            listenerList = [];
            msgMap[msgId] = listenerList;
        }
        listenerList.push({
            id: listenerId,
            callback:callback
        });
    }

    function removeMsgListener(msgId,listenerId){
        var listenerList = msgMap[msgId];
        if(listenerList){
            for (var i = 0; i < listenerList.length; i++) {
                if(listenerList[i].id === listenerId){
                    listenerList.splice(i,1);
                    break;
                }
            }
        }
    }

});
