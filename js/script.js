'use strict'

//  MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
    menuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});
// بستن منو بعد از کلیک روی لینک
document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("active");
        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';
    });
});
