const toogle=document.querySelector(".toogle");
const navbar=document.querySelector(".navbar-menu");
const icon=document.querySelector(".fa-solid");

toogle.addEventListener("click", function() {
    navbar.classList.toogle("active");
    icon.classList.toogle("fa-xmark");
})
const nav =document.querySelector("nav");
const up=document.querySelector("#up")
window.addEventListener("scroll",function(){
    if(window.scrollY >=650 ){
        navbar.style.backgroundColor= "#333";
    } else{
        nav.style.backgroundColor = "";
    }

if(window.scrollY >=800) {
    up.classList.add("active");

}
else {
    up.classList.remove("active");
}
if(window.scrollY >=850) up.classList.add("active");
else up.classList.remove("active");
condition ? true : false
window.scrollY >=850 ? up.classList.add("active") : up.classList.remove("active");
})
up.onclick=() => {
    window.scrollY({
        behavior:"smooth",
        top:0,
    });
}