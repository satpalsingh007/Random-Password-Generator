
let sec2 = document.getElementById("section2");
let sec3 = document.getElementById("section3");
let sec4 = document.getElementById("section4");


 function generate() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 8;
    let password1 = "";
    let password2 = "";
    let password3 = "";
    let password4 = "";
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password1 += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("section1").textContent = password1;

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password2 += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("section2").textContent = password2;

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password3 += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("section3").textContent = password3;

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password4 += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("section4").textContent = password4;

 }

