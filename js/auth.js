// START SHOW / HIDE PASSWORD
document.querySelectorAll(".toggle-password, .toggle-confirm").forEach(icon => {
    icon.addEventListener("click", () => {
        const input = icon.previousElementSibling;
        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
});

// LOGIN VALIDATION
const loginForm = document.querySelector("#loginForm");
if(loginForm){
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
    if(email === "" || password === ""){
        showMessage(
            "لطفاً تمام فیلدها را پر کنید",
            "error"
        );
        return;
    }
    if(password.length < 6){
        showMessage(
            "رمز عبور باید حداقل ۶ کاراکتر باشد",
            "error"
        );
        return;
    }
   showMessage(
    "ورود با موفقیت انجام شد",
    "success"
);
localStorage.setItem(
    "userLogin",
    "true"
);
localStorage.setItem(
    "userEmail",
    email
);

setTimeout(()=>{
    window.location.href="dashboard.html";
},1500);
});
}
// MESSAGE FUNCTION
function showMessage(text,type){
    let message = document.querySelector(".auth-message");
    if(!message){
        message = document.createElement("div");
        message.className="auth-message";
        document.querySelector(".auth-box")
        .appendChild(message);
    }
    message.innerText=text;
    message.className =
    "auth-message " + type;
    setTimeout(()=>{
        message.remove();
    },3000);
}



// etebar sangi sing in
const registerForm = document.querySelector("#registerForm");
if(registerForm){
registerForm.addEventListener("submit",(e)=>{
e.preventDefault();
const fullname=document.querySelector("#fullname").value.trim();
const email=document.querySelector("#email").value.trim();
const phone=document.querySelector("#phone").value.trim();
const password=document.querySelector("#password").value.trim();
const confirm=document.querySelector("#confirmPassword").value.trim();
const terms=document.querySelector("#terms").checked;
if(!fullname || !email || !phone || !password || !confirm){
showMessage("تمام فیلدها الزامی هستند.","error");
return;
}
if(password.length<6){
showMessage("رمز عبور باید حداقل ۶ کاراکتر باشد.","error");
return;
}
if(password!==confirm){
showMessage("رمز عبور و تکرار آن یکسان نیست.","error");
return;
}
if(!terms){
showMessage("لطفاً قوانین سایت را بپذیرید.","error");
return;
}
showMessage(
"ثبت نام با موفقیت انجام شد.",
"success"
);

localStorage.setItem(
"userName",
fullname
);
localStorage.setItem(
"userEmail",
email
);
localStorage.setItem(
"userPhone",
phone
);
setTimeout(()=>{
window.location.href="login.html";
},1500);
});
}




// HEADER LOGIN STATE
document.addEventListener(
"DOMContentLoaded",
()=>{
const headerActions =
document.querySelector(".header-actions");
if(headerActions){
const login =
localStorage.getItem("userLogin");
if(login==="true"){
const name =
localStorage.getItem("userName")
||
"کاربر";
headerActions.innerHTML=`
<a href="dashboard.html"
class="login-btn">
<i class="fa-solid fa-user"></i>
${name}
</a>
|
<a href="#"
onclick="logout()"
class="register-btn">
خروج
</a>`;

}
}
});
function logout(){
localStorage.removeItem(
"userLogin"
);
window.location.href="index.html";
}

// CHANGE HERO BUTTON AFTER LOGIN

document.addEventListener("DOMContentLoaded",()=>{
const heroBtn =
document.querySelector(".hero-buttons");
if(
heroBtn &&
localStorage.getItem("userLogin") === "true"
){
heroBtn.innerHTML = `
<a href="dashboard.html" class="btn primary">
ورود به داشبورد
</a>
`;
}
});