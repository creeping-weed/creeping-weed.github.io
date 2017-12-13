/**
 * Created by 胡国兴 on 2017/5/13.
 */
window.onload= function () {
    swipLeft();
    swipRight();
};
function swipLeft(){
    var bigBox=document.querySelector(".cate_left");
    var smallBox=bigBox.querySelector("ul");
    var startclientY=null;
    var moveY=null;
    var isMove=false;
    var max=100;
    var min=bigBox.offsetHeight-smallBox.offsetHeight-100;
    var y=0;
    smallBox.addEventListener("touchstart",function(e){
        startclientY=e.touches[0].clientY;
    });
    smallBox.addEventListener("touchmove",function(e){
        moveY=e.touches[0].clientY-startclientY+y;
        if(moveY<max&&moveY>min){
            removeTransition();
            setTranslateY(moveY);
            isMove=true;
        }
    });
    smallBox.addEventListener("touchend",function(){
        if(isMove){
            if(moveY>0){
                y=0;
                setTransition();
                setTranslateY(y);
            }else if(moveY<bigBox.offsetHeight-smallBox.offsetHeight){
                y=bigBox.offsetHeight-smallBox.offsetHeight;
                setTransition();
                setTranslateY(y);
            }else{
                y=moveY;
            }
        }
        startclientY=null;
        moveY=null;
    });
    //设置位置
    function setTranslateY(Y){
        smallBox.style.transform="translateY("+Y+"px)";
        smallBox.style.webkitTransform="translateY("+Y+"px)";
    }
    //设置过渡
    function setTransition(){
        smallBox.style.transition="all 0.2s";
        smallBox.style.webkitTransition="all 0.2s";
    }
    //取消过渡
    function removeTransition(){
        smallBox.style.transition="none";
        smallBox.style.webkitTransition="none";
    }
}
function swipRight() {
    new IScroll("#wrapper");
}
