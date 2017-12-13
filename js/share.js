/**
 * Created by 胡国兴 on 2017/6/21.
 */
window.onload=function(){
    var stick = document.getElementById("stick");
    var t = [
        {
            "background": 'url("../images/bcomputer.jpg")',
            "href": "http://tieba.baidu.com/f?ie=utf-8&kw=%E7%94%B5%E8%84%91&fr=search",
            "name": "电脑吧",
            "photo": "../images/computer.jpg",
            "brief": "下一步，让世界没有小白！在这里，你可以学习更多有关电脑的知识。"
        },
        {
            "background": 'url("../images/bfilm.jpg")',
            "href": "http://tieba.baidu.com/f?ie=utf-8&kw=%E6%91%84%E5%BD%B1",
            "name": "摄影吧",
            "photo": "../images/film.jpg",
            "brief": "展示个人摄影作品及个人写真等精美图片。通过展示并发表评论交流摄影经验、体验摄影之精髓"
        },
        {
            "background": 'url("../images/bweb.jpg")',
            "href": "http://tieba.baidu.com/f?ie=utf-8&kw=web",
            "name": "Web吧",
            "photo": "../images/web.png",
            "brief": "web前端开发学习交流，Web前端开发技术包括三个要素：HTML、CSS和JavaScript。"
        },
        {
            "background": 'url("../images/bgame.jpg")',
            "href": "http://tieba.baidu.com/f?ie=utf-8&kw=%E6%B8%B8%E6%88%8F",
            "name": "游戏吧",
            "photo": "../images/game.jpg",
            "brief": "无论何时，和你们的感觉不会变，就是喜欢和你玩游戏，一个属于游戏玩家的大本营。"
        },
        {
            "background": 'url("../images/bhistory.jpg")',
            "href": "http://tieba.baidu.com/f?ie=utf-8&kw=%E5%8E%86%E5%8F%B2",
            "name": "历史吧",
            "photo": "../images/history.png",
            "brief": "了解历史，品味历史，应用历史。"
        },
        {
            "background": 'url("../images/bnovel.jpg")',
            "href": "http://tieba.baidu.com/f?ie=utf-8&kw=%E5%B0%8F%E8%AF%B4&fr=search",
            "name": "小说吧",
            "photo": "../images/nover.jpg",
            "brief": "小说吧是百度贴吧中的一个大众交流平台，同时，也是以论坛形式为主的文学原创基地。"
        }
    ];
    var st = [];
    for (var i = 0; i < t.length; i++) {
        var string = '<h4>' +
            '<a href="' + t[i].href + '" target="_blank">' + t[i].name + '</a>' +
            '</h4>' +
            '<i></i>' +
            '<a href="' + t[i].href + '" title="点击进入贴吧" target="_blank">' +
            '<img src="' + t[i].photo + '" alt="">' +
            '</a>' +
            '<p>' + t[i].brief + '</p>';
        st.push(string);
        var div = document.createElement("div");
        div.className = "box" + (i + 1);
        stick.appendChild(div);
        div.innerHTML = st[i];
        div.children[1].style.backgroundImage = t[i].background;
    }

//旅游部分js

    var box1=document.getElementById("box1");
    var box1s=box1.getElementsByTagName("span");
    var box2=document.getElementById("box2");
    var box3=document.getElementById("box3");
    var box2s=[box2,box3];
    for(var k=0;k<box1s.length;k++){
        box1s[k].setAttribute("index",""+k+"");
        box1s[k].onclick=function(){
            for(var k=0;k<box1s.length;k++){
                box1s[k].removeAttribute("class");
                box2s[k].className="dd"
            }
            this.setAttribute("class","cr");
            box2s[this.getAttribute("index")].className="dd show";
        }
    }
};