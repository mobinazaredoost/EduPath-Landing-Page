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

