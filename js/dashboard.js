const menuItems = document.querySelectorAll(".menu li");
menuItems.forEach(item => {
    item.addEventListener("click",()=>{
        menuItems.forEach(i=>{
            i.classList.remove("active");
        });
        item.classList.add("active");
    });
});
// START NUMBER COUNTER ANIMATION
const counters =
document.querySelectorAll(".card h2");
counters.forEach(counter=>{
let value =
parseFloat(counter.innerText);
let count = 0;
let step =
value / 60;
function update(){
if(count < value){
count += step;
counter.innerText =
value % 1 === 0
?
Math.ceil(count)
:
count.toFixed(1);
requestAnimationFrame(update);
}else{
counter.innerText=value;
}
}
update();
});

// 
const revealElements = document.querySelectorAll(
".dashboard-card, .card, .welcome"
);
const revealOnScroll = ()=>{
    revealElements.forEach(element=>{
        const windowHeight =
        window.innerHeight;
        const elementTop =
        element.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100){
            element.classList.add("reveal-active");
        }
    });
};
window.addEventListener(
"scroll",
revealOnScroll
);
revealOnScroll();
// NOTIFICATION ANIMATION 
const notifications =
document.querySelectorAll(".notification");
notifications.forEach(notification=>{
    setInterval(()=>{
        notification.classList.toggle(
        "shake"
        );

    },3000);
});

//  LIVE DATE
function updateDate(){
    const dateElement =
    document.querySelector(".current-date");
    if(dateElement){
        const now = new Date();
        dateElement.innerText =
        now.toLocaleDateString(
        "fa-IR",
        {
            weekday:"long",
            year:"numeric",
            month:"long",
            day:"numeric"
        });
    }
}
updateDate();
setInterval(
updateDate,
60000
);

//  START  STUDY BUTTON LOADING
const studyButton =
document.querySelector(".study-btn");
if(studyButton){
studyButton.addEventListener(
"click",
function(e){
    e.preventDefault();
    this.innerHTML =
    `
    <i class="fa-solid fa-spinner fa-spin"></i>
    در حال آماده سازی...
    `;
    setTimeout(()=>{
        this.innerHTML =
        `
        شروع مطالعه
        `;
    },2000);
});
}


//    CARD 3D
const cards =
document.querySelectorAll(
".card, .dashboard-card"
);
cards.forEach(card=>{
    card.addEventListener(
    "mousemove",
    e=>{
        const rect =
        card.getBoundingClientRect();
        const x =
        e.clientX - rect.left;
        const y =
        e.clientY - rect.top;
        const rotateX =
        (y - rect.height/2) / 20;
        const rotateY =
        (rect.width/2 - x) / 20;
        card.style.transform =
        `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;
    });
    card.addEventListener(
    "mouseleave",
    ()=>{
        card.style.transform =
        "";
    });
});

// FAKE NOTIFICATION
const bell =
document.querySelector(".bx-bell");
if(bell){
bell.addEventListener(
"click",
()=>{
alert(
"🔔 شما 3 پیام جدید از مشاور دارید"
);
});
}

//CLICK PROFILE 
const profile =
document.querySelector(".profile");
if(profile){
profile.addEventListener(
"click",
()=>{
profile.classList.toggle(
"profile-open"
);
});
}