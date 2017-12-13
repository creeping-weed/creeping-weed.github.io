/**
 * Created by 胡国兴 on 2017/5/13.
 */
    $(function () {
        //var musics=["bukeshuo.mp3","duhuo.mp3","geiwoyigeliyouwangji.mp3",
        //    "haikuotiankong.mp3","qingyiyao.mp3","zhendebunenglikaini.mp3"];
        var musics = [
            {
                "src": "music/bukeshuo.mp3",
                "img": "images/music1.jpg",
                "name":"歌曲名：不可说",
                "singer":"歌手：赵丽颖"
            }, {
                "src": "music/duhuo.mp3",
                "img": "images/music2.jpg",
                "name":"歌曲名：独活",
                "singer":"歌手：炎亚纶"
            }, {
                "src": "music/geiwoyigeliyouwangji.mp3",
                "img": "images/music3.jpg",
                "name":"歌曲名：给我一个理由忘记",
                "singer":"歌手：A-Lin"
            }, {
                "src": "music/haikuotiankong.mp3",
                "img": "images/music4.jpg",
                "name":"歌曲名：海阔天空",
                "singer":"歌手：Beyond"
            }, {
                "src": "music/qingyiyao.mp3",
                "img": "images/music5.jpg",
                "name":"歌曲名：青衣谣",
                "singer":"歌手：郁可唯"
            }, {
                "src": "music/zhendebunenglikaini.mp3",
                "img": "images/music6.jpg",
                "name":"歌曲名：真的不能离开你",
                "singer":"歌手：张杰"
            }
        ];
        var i = 0;
//            获取对象
        var musicbox = $(".musicbox");
        var audio = document.querySelector(".musicbox .audio");
        var prev = $(".musicbox .prev");
        var suspend = $(".musicbox .suspend");
        var next = $(".musicbox .next");
        var progress = $(".musicbox .progress");
        var line = $(".musicbox .line");
        var current = $(".musicbox .current");
        var total = $(".musicbox .total");
        var infoname=$(".musicbox .info p:eq(0)");
        var infosinger=$(".musicbox .info p:eq(1)");
        var infotime=$(".musicbox .info p:eq(2)");
//            格式化时间
        function t(a) {
            var minute = Math.floor(a % 3600 / 60);
            if (minute < 10) {
                minute = "0" + minute;
            }
            var s = Math.ceil(a % 60);
            if (s < 10) {
                s = "0" + s;
            } else if (s == 60) {
                s = 59;
            }
            return minute + ":" + s;
        }
//            显示歌曲总时间
        audio.oncanplay = function () {
//                var time=audio.duration;
//                total.html(t(time));
//                优化
            total.html(t(audio.duration));
            infotime.html("时长："+t(audio.duration)+"");
        };
//            暂停和播放
        suspend.on("click", function () {
            if (suspend.hasClass("fa-play")) {
                suspend.removeClass("fa-play").addClass("fa-pause");
                audio.play();
                $(this).css("color", "purple");
            } else {
                suspend.removeClass("fa-pause").addClass("fa-play");
                audio.pause();
                $(this).css("color", "blue");
            }
        });
//            当前播放的时间与进度条
        audio.ontimeupdate = function () {
            current.html(t(audio.currentTime));
            line.css("width", audio.currentTime / audio.duration * 100 + "%");
        };
//            跃进
        progress.on("click", function (e) {
            //var q = e.offsetX / progress.width() * audio.duration;
            //audio.currentTime =q;
            //简化
            audio.currentTime =e.offsetX / progress.width() * audio.duration;
        });
//            播放完毕处理
        audio.onended = function () {
//                方法一
//                console.log("播放完毕");
//                suspend.removeClass("fa-pause").addClass("fa-play");
//                line.css("width","0%");
//                i++;
//                if(i==musics.length){
//                    i=0;
//                }
//                audio.src=musics[i];
//                suspend.click();
//                方法二(优化)
            next.click();
        };
        next.on("click", function () {
            suspend.removeClass("fa-pause").addClass("fa-play");
            line.css("width", "0%");
            i++;
            if (i == musics.length) {
                i = 0;
            }
            audio.src = musics[i].src;
            musicbox.css({"background":"url(" + musics[i].img + ") no-repeat",
                "backgroundSize":"246px 300px"});
            infoname.html(musics[i].name);
            infosinger.html(musics[i].singer);
            suspend.click();
        });
        prev.on("click", function () {
            suspend.removeClass("fa-pause").addClass("fa-play");
            line.css("width", "0%");
            i--;
            if (i < 0) {
                i = musics.length - 1;
            }
            audio.src = musics[i].src;
            musicbox.css({"background":"url(" + musics[i].img + ") no-repeat",
                            "backgroundSize":"246px 300px"});
            infoname.html(musics[i].name);
            infosinger.html(musics[i].singer);
            suspend.click();
        });
        //suspend.trigger("click");
    });