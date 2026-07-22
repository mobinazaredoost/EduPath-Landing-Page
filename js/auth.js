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
    message.className =
    "auth-message " + type;
    setTimeout(()=>{
        message.remove();
    },3000);
}