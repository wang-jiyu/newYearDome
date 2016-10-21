/**
 * Created by SuperMe on 16/9/27.
 */
window.onload = function () {

    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");


    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

    //到那个音乐停止时 自动停止光盘的旋转效果
    audio.addEventListener("ended", function (event) {
        music.setAttribute("class", "");
    }, false)

    //music.onclick = function () {
    //    if (audio.paused) {
    //        audio.play();
    //        this.setAttribute("class","play");
    //        //this.style.animationPlayState="running"
    //        //this.style.webkitAnimationPlayState="running"
    //    } else {
    //        audio.pause();
    //        this.setAttribute("class","null");
    //        //this.style.animationPlayState="paused"
    //        //this.style.webkitAnimationPlayState="paused"
    //    }
    //}

    music.addEventListener("touchstart", function (event) {
        if (audio.paused) {
            audio.play();
            this.setAttribute("class", "play");
        } else {
            audio.pause();
            this.setAttribute("class", "null");
        }
    }, false);

    page1.addEventListener("touchstart", function (event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top     = "100%";


        setTimeout(function(){
            page2.setAttribute("class" ,"page fadeOut");
            page3.setAttribute("class","page fadeIn");
        },5500)
    }, false)
}