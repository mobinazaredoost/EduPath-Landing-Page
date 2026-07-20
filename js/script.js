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

// HEADER SCROLL EFFECT
const header = document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
});

// REVEAL SECTIONS
const revealElements =
document.querySelectorAll(
".card, .feature, .stat, .review, .cta"
);
const revealObserver =
new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:.15
});
revealElements.forEach(el=>{
    el.classList.add("hidden");
    revealObserver.observe(el);
});

        const target =
        document.querySelector(
        this.getAttribute("href")
        );
        if(target){
            e.preventDefault();
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });

});


