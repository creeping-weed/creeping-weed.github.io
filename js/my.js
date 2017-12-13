/**
 * Created by 胡国兴 on 2017/6/13.
 */
$(function(){
    $("#fullpage").fullpage({
        navigation:true,
        afterLoad:function(anchorLink,index){
            console.log(index);
            if(index==1){
                console.log("可以执行");
                s1();
            }else if(index==2){
                console.log("第二可以执行");
                s2();
            }else if(index==3){
                console.log("第三可以执行");
                s3();
            }else if(index==4){
                console.log("第四可以执行");
                s4();
            }else if(index==5){
                console.log("第五可以执行");
                s5();
            }
        },
        onLeave:function(index,nextIndex,direction){
            if(index==1){
                console.log("还原第一屏");
                h1();
            }else if(index==2){
                console.log("还原第二屏");
                h2();
            }else if(index==3){
                console.log("还原第三屏");
                h3();
            }else if(index==4){
                console.log("还原第四屏");
                h4();
            }else if(index==5){
                console.log("还原第五屏");
                h5();
            }
        }
    });
    //$("body").on("click",function(){
    //    $("#fullpage").fullpage.moveSectionDown();
    //});
    //window.onscroll=function(){
    //    console.log("aaa");
    //}


    //第一屏动画
    function s1(){
        $("#text span").animate({"margin":"0px", "color":"#fff"},2000,function(){
            $("#down p").animate({"top":"0px","opacity":"0.8"},500);
        });
    }
    //还原第一屏
    function h1(){
        $("#text span").css({"margin":"30px", "color":"#000"});
        $("#down p").css({"top":"-200px","opacity":"0.3"});
    }
    //第二屏动画
    function s2(){
        $("#text1").animate({"opacity":"0.7"},500,function(){
            $("#text1 h3").animate({"left":"0px"},500,function(){
                $("#text1 p:eq(0)").animate({"top":"0px"},200,function(){
                    $("#text1 p:eq(1)").animate({"top":"0px"},200,function(){
                        $("#text1 p:eq(2)").animate({"top":"0px"},200,function(){
                            $("#text1 p:eq(3)").animate({"top":"0px"},200,function(){
                                $("#qq li.l1").animate({"left":"60%"},500,function(){
                                    $("#qq li.l2").animate({"right":"60%"},500);
                                })
                            })
                        })
                    })
                })
            })
        });
    }
    //还原第二屏
    function h2() {
        $("#text1").css({"opacity":"0"});
        $("#text1 h3").css({"left":"2000px"});
        $("#text1 p").css({"top":"-800px"});
        $("#qq li.l1").css({"left":"2000px"});
        $("#qq li.l2").css({"right":"2000px"});
    }
    //第三屏动画
    function s3(){
        $(".f3 .s3_1").removeClass("a");
        $(".f3 .s3_2").removeClass("a");
        $(".f3 .s3_3").removeClass("a");
        $(".f3 .text3").removeClass("a");
        $(".f3 .text3 div").removeClass("a");
    }
    //还原第三屏
    function h3(){
        $(".f3 .s3_1").addClass("a");
        $(".f3 .s3_2").addClass("a");
        $(".f3 .s3_3").addClass("a");
        $(".f3 .text3").addClass("a");
        $(".f3 .text3 div").addClass("a");
    }
    //第四屏动画
    function s4(){
        $(".f4 .text4").removeClass("a");
        $(".f4 .box ul").removeClass("a");
    }
    //还原第四屏
    function h4(){
        $(".f4 .text4").addClass("a");
        $(".f4 .box ul").addClass("a");
    }
    //第五屏动画
    function s5(){
        $(".f5 .bg").removeClass("a");
        $(".f5 .text5 a").removeClass("a");
    }
    //还原第五屏
    function h5(){
        $(".f5 .bg").addClass("a");
        $(".f5 .text5 a").addClass("a");
    }

});

