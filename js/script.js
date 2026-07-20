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

// START COUNTER ANIMATION

const counters =
document.querySelectorAll(".stat h2");
let started = false;

const counterObserver =
new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting && !started){
            counters.forEach(counter=>{
                let target =
                +counter.innerText.replace(/\D/g,'');
                let current = 0;
                let increment =
                target / 100;
                let timer =
                setInterval(()=>{
                    current += increment;
                    if(current >= target){
                        counter.innerText =
                        counter.innerText.includes("%")
                        ? target+"%"
                        : target+"+";
                        clearInterval(timer);
                    }
                    else{
                        counter.innerText =
                        Math.floor(current);
                    }},20);
            });
            started=true;
        }
    });
});

counterObserver.observe(
document.querySelector(".stats")
);

// SMOOTH SCROLL=اسکرول روان 
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
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


