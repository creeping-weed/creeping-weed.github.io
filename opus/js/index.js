/**
 * Created by 胡国兴 on 2017/5/6.
 */
window.onload=function(){
    search();
    time();
    banner();
};
//搜索栏
function search(){
    var search_box=document.querySelector(".search_box");
    var bannerWidth=document.querySelector(".banner");
    //获取banner的高度（方法一）
    //var b=window.getComputedStyle(bannerWidth,null);
    //console.log(c);
    //var height= parseInt(b.height);
    //获取banner的高度（方法二）
    var height=bannerWidth.offsetHeight;
    search_box.style.background = "rgba(201,21,35,0)";
    window.onscroll=function() {
        //获取滚动的高度（方法一）
        //var b = window.pageYOffset;
        //获取滚动的高度（方法二) (IE678：document.documentElement.scrollTop）
        var b=document.body.scrollTop;
        if (b <= height){
            search_box.style.background = "rgba(201,21,35,"+b/height +")";
        }else {
            search_box.style.background = "rgba(201,21,35,1)";
        }
    }
}
//轮播图
var banner=function(){
    //设置过渡
    function setTransition(){
        imgbox.style.transition="all 0.8s";
        imgbox.style.webkitTransition="all 0.8s";
    }
    //取消过渡
    function  removeTransition(){
        imgbox.style.transition="none";
        imgbox.style.webkitTransition="none";
    }
    //设置位移
    function setTransform(translateX){
        imgbox.style.transform="translateX("+(translateX)+"px)";
        imgbox.style.webkitTransform="translateX("+(translateX)+"px)";
    }
//自动轮播，无缝滚动
    var banner=document.querySelector(".banner");
    var imgbox=banner.querySelector("ul:first-child");
    var ul=banner.querySelector("ul:last-child");
    var lis=ul.querySelectorAll("li");
    var imgWidth=banner.querySelector("ul img").offsetWidth;
    var index=0;
    var timer=setInterval(function(){
        index++;
        //加过渡
        setTransition();
        //加位移
        setTransform(-imgWidth*index);
    },2500);
    //监听过渡完成
    imgbox.addEventListener("transitionend",function(){
        if(index>=9){
            index=1;
            //去过渡
            removeTransition();
            //加位移
            setTransform(-imgWidth*index);
            //无缝的滑动
        }if(index<=0){
            index=8;
            removeTransition();
            setTransform(-imgWidth*index);
        }
        //点的滚动
        console.log(index);
        setPoint();
    });
    function setPoint(){
        for(var i=0;i<lis.length;i++){
            lis[i].removeAttribute("class");
        }
        lis[index-1].className="now";
    }
    //滑动的设置
    //监听事件
    var start=null;
    var end=null;
    imgbox.addEventListener("touchstart",function(even){
        clearInterval(timer);
        start=even.changedTouches[0].pageX;
    });
    imgbox.addEventListener("touchmove",function(even){
        var move=even.changedTouches[0].pageX;
        var s=move-start;
        removeTransition();
        setTransform(-imgWidth*index+s);
    });
    imgbox.addEventListener("touchend",function(even){
        end=even.changedTouches[0].pageX;
        var s=end-start;
        console.log(s);
        if(Math.abs(s)>imgWidth/3){
            if(s>=0){
                index--;
                setTransition();
                setTransform(-imgWidth*index);
                setPoint();
            }else{
                index++;
                setTransition();
                setTransform(-imgWidth*index);
                setPoint();
            }
        }else{
            setTransition();
            setTransform(-imgWidth*index);
        }
        start=null;
        end=null;
        //再清除定时器一次，防止多次添加
        clearInterval(timer);
        timer=setInterval(function(){
            index++;
            //加过渡
            setTransition();
            //加位移
            setTransform(-imgWidth*index);
        },2500);
    })
};
//倒计时
var time=function(){
    //1.找对象
    var ti=document.querySelector(".time");
    var ts=ti.querySelectorAll(".t");
    //2.重置时间
    var t=[1,3,5,9,3,0];
    for(var i=0;i<ts.length;i++){
        ts[i].innerHTML=""+t[i]+"";
    }
    //3.格式化时间
    function setTime(){
        s=t[0]*10*3600+t[1]*3600+t[2]*10*60+t[3]*60+t[4]*10+t[5];
        return s;
    }
    var timmer=setInterval(function(){
        s=setTime();
        s=s-1;
        t[0]=Math.floor((Math.floor(s/3600))/10);
        t[1]=(Math.floor(s/3600))%10;
        t[2]=Math.floor((Math.floor((s/60)-((Math.floor(s/3600))*60)))/10);
        t[3]=(Math.floor((s/60)-((Math.floor(s/3600))*60)))%10;
        t[4]=Math.floor((Math.floor(s%60))/10);
        t[5]=(Math.floor(s%60))%10;
        //4.设置时间
        for(var i=0;i<t.length;i++) {
            ts[i].innerHTML = "" + t[i] + "";
        }
        if(t[0]==0&&t[1]==0&&t[2]==0&&t[3]==0&&t[4]==0&&t[5]==0){
            clearInterval(timmer);
        }
    },1000);
};