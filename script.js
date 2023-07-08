let moon = document.getElementById("moon");

let cityleft = document.getElementById("cityleft");

let cityright = document.getElementById("cityright");

let herotext = document.getElementById("text");


window.addEventListener("scroll",()=>{
    let scrollvalue = window.scrollY;
    moon.style.top = scrollvalue * 0.8 + "px";
    herotext.style.marginTop = scrollvalue * 1.2 + "px";
    cityleft.style.left = scrollvalue * -1 + "px";
    cityright.style.left = scrollvalue * 1 + "px";

})
