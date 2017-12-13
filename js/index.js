/**
 * Created by 胡国兴 on 2017/5/12.
 */
window.onload=function(){
    //    时间部分JS
    var year=document.getElementById("year");
    var now=document.getElementById("now");
    setInterval(function(){
        var years=getYear();
        var nows=getNow();
        year.innerHTML=years;
        now.innerHTML=nows;
    },1000);
    function getYear(){
        var y="";
        var date=new Date();
        var year=date.getFullYear();
        var moth=date.getMonth();
        if(moth<10){
            moth="0"+(moth+1);
        }
        var day=date.getDate();
        y=year+"年"+moth+"月"+day+"日";
        return y;
    }
    function getNow(){
        var n="";
        var date=new Date();
        var hour=date.getHours();
        var min=date.getMinutes();
        if(min<10){
            min="0"+min;
        }
        var s=date.getSeconds();
        if(s<10){
            s="0"+s;
        }
        n=hour+":"+min+":"+s;
        return n;
    }
//    导航条部分js
    var ul=document.getElementById("links");
    var links=ul.getElementsByTagName("li");
    var a=ul.getElementsByTagName("a");
    var b=document.getElementById("b");
    var style=0;
    for(var i=0;i<links.length;i++){
//        背景图移动
        var link=links[i];
        link.onmouseover=function(){
            var x=this.offsetLeft;
//            b.style.backgroundPositionX=x+"px";
            animate(b,{"backgroundPositionX":x});
        };
        link.onmouseout=function(){
            animate(b,{"backgroundPositionX":style});
        };
        link.onclick=function(){
            //var x=this.offsetLeft;
            //style=x;
            style=this.offsetLeft;
        };
//        a标签变色
        a[0].style.color="red";
        a[i].onclick=function(){
            for(var i=0;i< a.length;i++){
                a[i].style.color="#fff";
            }
            this.style.color="red";
        }
    }
//    banner部分js
//    获取左右箭头
    var hs=document.getElementById("hs");
    var imgbox=document.getElementById("imgbox");
    var l=document.getElementById("l");
    var g=document.getElementById("g");
//    获取小圆点
    var dot=document.getElementById("dot");
    var dots=dot.getElementsByTagName("li");
//    获取ul
    var img=document.getElementById("img");
    var imgs=img.getElementsByTagName("img");
//    左右箭头显示隐藏
    imgbox.onmouseover=function(){
        hs.className=hs.className.replace("hide","show");
    };
    imgbox.onmouseout= function () {
        hs.className=hs.className.replace("show","hide");
    };
//    获取图片的宽度
    var imgwidth=imgs[0].offsetWidth;
//    轮播图自动播放
    var index=0;
    setInterval(function() {
        if (index == 4) {
            img.style.left = "0";
            index = 0;
        }
        index++;
        animate(img, {"left": -index*imgwidth});
        for(var i=0;i<dots.length;i++){
            dots[i].removeAttribute("class");
        }
        if(index==4){
            dots[0].className="color";
        }else{
            dots[index].className="color";
        }
        console.log(index);
    },4000);
//    左右焦点图
    g.onclick=function(){
        if(index==4){
            index=0;
            img.style.left="0";
        }
        index++;
        animate(img,{"left":-index*imgwidth});
        for(var i=0;i<dots.length;i++){
            dots[i].removeAttribute("class");
        }
        if(index==4){
            dots[0].className="color";
        }else{
            dots[index].className="color";
        }
    };
    l.onclick=function(){
        if(index==0){
            index=4;
            img.style.left="-4400px";
        }
        index--;
        animate(img,{"left":-index*imgwidth});
        for(var i=0;i<dots.length;i++){
            dots[i].removeAttribute("class");
        }
        dots[index].className="color";
    };
//    小圆点
    for(var j=0;j<dots.length;j++){
        dots[j].index=j;
        dots[j].onclick=function(){
            index=this.index;
            animate(img,{"left":-index*imgwidth});
            for(var j=0;j<dots.length;j++){
                dots[j].removeAttribute("class");
            }
            dots[index].className="color";
        }
    }
//    提示
    alert("欢迎访问我的网站！为了达到最佳浏览效果，请使用IE9+、Chrome、Firefox等现代浏览器。");


    //返回顶部
    var up=document.getElementById("up");
    console.log(up);
    up.style.display="none";
    window.onscroll=function(){
        var height=scroll().top;
        console.log(height);
        if(height>500){
            up.style.display="block";
        }else{
            up.style.display="none";
        }
    };
    up.onclick=function(){
        var timer=setInterval(function(){
            var height=scroll().top;
            height=height-10;
            console.log(height);
            if(height<=0){
                document.body.scrollTop=0;
                document.documentElement.scrollTop=0;
                clearInterval(timer);
            }else{
                document.body.scrollTop=height;
                document.documentElement.scrollTop=height;
            }
        },10)
    }
};
