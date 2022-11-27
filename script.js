var btn_next = document.querySelector(".btn_next")
var btn_prev = document.querySelector(".btn_prev")
var images = document.querySelectorAll(".slider__images img")                               

var i= 0;

btn_next.onclick = function (){
    images[i].style.display = "none"
    i++
    if(i >= images.length){
        i = 0;
    }
    images[i].style.display = "block"
    
}

setInterval(function word (){
    images[i].style.display = "none"
    i++
    if(i >= images.length){
        i = 0;
    }
    images[i].style.display = "block"
    
}, 3000)


btn_prev.onclick = function (){
    images[i].style.display = "none"
    i--
    if(i < 0){
        i = images.length -1;
    }
    images[i].style.display = "block"
}







