const generatePasswordBtn = document.getElementById("generatePassword-btn");
const passwordOutput = document.getElementById("pass__out");
const copyBtn = document.getElementById("copy-btn");

Toastify({
  text: "Generate your Password",
  duration: 3000,
  destination: "",
  newWindow: true,
  close: true,
  gravity: "bottom", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function() { } // Callback after click
}).showToast();


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
const lowercase = uppercase.toLocaleLowerCase();
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+='{[}],|:;<>.?'/";




generatePasswordBtn.addEventListener("click", () => {


  let password = "";


  (includeUppercase.checked) ? password += uppercase : "";
  (includeLowercase.checked) ? password += lowercase : "";
  (includeNumbers.checked) ? password += numbers : "";
  (includeSymbols.checked) ? password += symbols : "";


  passwordOutput.textContent = generatePassword(passwordLength.value, password);

  Toastify({
    text: "Generated Password",
    duration: 3000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function() { } // Callback after click
  }).showToast();


});



function generatePassword(passwordLength, password) {

  let randomPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    randomPassword += password.charAt(Math.floor(Math.random() * password.length));
  }


  return randomPassword;
}

copyBtn.addEventListener("click", () => {

    Toastify({
        text: "Password Copied!",
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function() { } // Callback after click
      }).showToast();

  // passwordOutput.select();
  // passwordOutput.setSelectionRange(0, 99999);
  // document.execCommand("copy");


  // if (passwordOutput.value === "") {
  //   errorPopUp.style.display = "block";
  // } else {
  //   successPopUp.style.display = "block";
  // };


  // if (passwordOutput.value = "copy") {
  //   passwordOutput.value = "";
  // };
  console.log('click')
  navigator.clipboard.writeText(passwordOutput.textContent)

})


successBtn.addEventListener("click", () => {
  successPopUp.style.display = "none";

})


errorBtn.addEventListener("click", () => {
  errorPopUp.style.display = "none";
})

