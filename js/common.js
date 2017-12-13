/**
 * Created by 胡国兴 on 2017/2/14.
 */
//一下内容为兼容性封装

//获取标签的内容
function getInnerText(element){
    if(typeof element.innerText==="string"){
        return element.inenrText;
    }else{
        return element.TextContent;
    }
}
//设置标签内容
function setInnerText(element,value){
    if(typeof element.innerText==="string"){
        element.innerText=value;
    }else{
        element.TextConten=value;
    }
}
//获取下一个兄弟元素（兼容IE6.7.8）
function getNextElement(element){
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else{
        var node=element.nextSibling;
        while(node && node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}
//获取上一个兄弟元素（兼容IE6.7.8）
function getpreviousElement(element){
    if(element.previousElementSibling){
        return element.previousElementSibling;
    }else{
        var node=element.previousSibling;
        while(node && node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}
//获取第一个子元素
function getfirstElement(element){
    if(element.firstElementChild){
        return element.firstElementChild;
    }else{
        var node=element.firstChild;
        while(node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}
//获取最后一个子元素
function getlastElement(element){
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var node=element.lastChild;
        while(node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}
//通过ID获取元素
//function $(id){
//    return document.getElementById(id);
//}
//封装时间函数
//function getHours() {
//    var data = new Date();
//    var year = data.getFullYear();
//    var month = data.getMonth()+1;
//    if (month < 10) {
//        month = "0" + month;
//    }
//    var day = data.getDay();
//    var date = data.getDate();
//    if (date < 10) {
//        date = "0" + date;
//    }
//    var hours = data.getHours();
//    if (hours < 10) {
//        hours = "0" + hours;
//    }
//    var minute = data.getMinutes();
//    if (minute < 10) {
//        minute = "0" + minute;
//    }
//    var seconds = data.getSeconds();
//    if(seconds<10){
//        seconds="0"+seconds;
//    }
//    var string = year + "-" + month + "-" + date + " " + hours + ":" + minute + ":" + seconds;
//    return string;
//}
//匀速动画函数封装
//function animate(obj,target){
//    if(obj.timer){
//        clearInterval(obj.timer);
//    }
//    obj.timer=setInterval(function () {
//        var leader=obj.offsetLeft;
//        var step=20;
//        if(leader>target){
//            step=-step;
//        }
//        var juli=Math.abs(target-leader);
//        if(juli>Math.abs(step)) {
//            leader=leader+step;
//            obj.style.left = leader + "px";
//        }else{
//            obj.style.left=target+"px";
//            clearInterval(obj.timer);
//        }
//    }, 15);
//}
//scroll封装 还回值是一个对象（卷动的高度与宽度）
function scroll(){
    return {
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
    }
}
//获取样式封装
function  getStyle(obj,arrt){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[arrt];  //现代浏览器
    }else{
        return obj.currentStyle[arrt];   //IE678
    }
}
//缓动动画封装
function animate(obj,json,fn){
    if(obj.timer){
        clearInterval(obj.timer);
    }
    obj.timer=setInterval(function(){
        var flag=true;
        for(var k in json){
            if(k=="opacity"){
                var leader=getStyle(obj,k);
                leader=leader*1000;
                leader=parseInt(leader)||0;
                var step=(json[k]*1000-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                obj.style[k]=leader/1000;
                if(leader!=json[k]*1000){
                    flag=false;
                }
            }else if(k=="zIndex"){
                obj.style[k]=json[k];
            }else{
                var leader=getStyle(obj,k);
                leader=parseInt(leader)||0;
                var step=(json[k]-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                obj.style[k]=leader+"px";
                if(leader!=json[k]){
                    flag=false;
                }
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },15)
}
//client封装（可视区域的高度与宽度）
function client(){
    return{
        width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
        height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
    }
}
//给任意对象注册任意事件
function  addEvent(element,type,fn){
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}
//移除事件
function removeEvent(element,type,fn){
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else{
        element["on"+type]=null;
    }
}