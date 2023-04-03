const generatePasswordBtn = document.getElementById("generatePassword-btn");
const passwordOutput = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");




const successPopUp = document.getElementById("success-pop-overlay");
const errorPopUp = document.getElementById("error-pop-overlay");
const successBtn = document.getElementById("sucsess-btn");
const errorBtn = document.getElementById("error-btn");



let passwordLength = document.getElementById("p-length");




const includeUppercase = document.getElementById("p-uppercase");
const includeLowercase = document.getElementById("p-lowercase");
const includeNumbers = document.getElementById("p-numbers");
const includeSymbols = document.getElementById("p-symbols");



const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+='{[}],|:;<>.?'/";




generatePasswordBtn.addEventListener("click", () => {

    
    let password = "";

   
    (includeUppercase.checked) ? password += uppercase : "";
    (includeLowercase.checked) ? password += lowercase : "";
    (includeNumbers.checked) ? password += numbers : "";
    (includeSymbols.checked) ? password += symbols : "";

    
    passwordOutput.value = generatePassword(passwordLength.value, password);
});



function generatePassword(passwordLength, password) {

    let randomPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        randomPassword += password.charAt(Math.floor(Math.random() * password.length));
    }

   
    return randomPassword;
}

copyBtn.addEventListener("click", () => {

   
    passwordOutput.select();
    passwordOutput.setSelectionRange(0, 99999);
    document.execCommand("copy");

   
    if (passwordOutput.value === "") {
        errorPopUp.style.display = "block";
    } else {
        successPopUp.style.display = "block";
    };

    
    if (passwordOutput.value = "copy") {
      passwordOutput.value = "";
    };
})


successBtn.addEventListener("click", () => {
    successPopUp.style.display = "none";
    
}) 


errorBtn.addEventListener("click", () => {
    errorPopUp.style.display = "none";
}) 

