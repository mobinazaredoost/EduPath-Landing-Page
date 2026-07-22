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
showMessage("ثبت نام با موفقیت انجام شد.","success");
});
}