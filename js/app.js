const menuButton = document.querySelector(".menu-btn");
const header = document.querySelector("header");
const menuList = document.querySelector(".menu-list");
const body = document.querySelector("body");
let isMenuOpen = false;

menuButton.addEventListener("click", ()=> {
    if(!isMenuOpen){
        isMenuOpen = true;
        menuButton.classList.add("active-btn");
        header.classList.add("active-header");
        menuList.classList.add("active-list");
        body.classList.add("unscroll");
    }else{
        isMenuOpen = false;
        menuButton.classList.remove("active-btn");
        header.classList.remove("active-header");
        menuList.classList.remove("active-list");
        body.classList.remove("unscroll");
    }
});