// start SHOW / HIDE PASSWORD
const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.querySelector("#password");
if(togglePassword){
    togglePassword.addEventListener("click",()=>{
        if(passwordInput.type === "password"){
            passwordInput.type = "text";
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        }else{
            passwordInput.type = "password";
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        }
    });
}
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