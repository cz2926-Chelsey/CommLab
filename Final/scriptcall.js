let show = document.querySelector(".show");
let digit1 = document.querySelector(".digit:nth-child(1)");
let tone1 = document.querySelector("#tone1");

digit1.addEventListener("click", function () {
    show.innerText += "1";
    tone1.play();
});

let digit2 = document.querySelector(".digit:nth-child(2)");
let tone2 = document.querySelector("#tone2");

digit2.addEventListener("click", function () {
    show.innerText += "2";
    tone2.currentTime = 0;
    tone2.play();
});

let digit3 = document.querySelector(".digit:nth-child(3)");
let tone3 = document.querySelector("#tone3");

digit3.addEventListener("click", function () {
    show.innerText += "3";
    tone3.currentTime = 0;
    tone3.play();
});

let digit0 = document.querySelector(".row:last-child .digit");
let tone0 = document.querySelector("#tone0");

digit0.addEventListener("click", function () {
    show.innerText += "0";
    tone0.currentTime = 0;
    tone0.play();
});

let digit4 = document.querySelector(".row:nth-child(2) .digit:nth-child(1)");
digit4.addEventListener("click", function () {
    show.innerText += "4";
    tone1.currentTime = 0;
    tone1.play();
});

let digit5 = document.querySelector(".row:nth-child(2) .digit:nth-child(2)");
digit5.addEventListener("click", function () {
    show.innerText += "5";
    tone2.currentTime = 0;
    tone2.play();
});

let digit6 = document.querySelector(".row:nth-child(2) .digit:nth-child(3)");
digit6.addEventListener("click", function () {
    show.innerText += "6";
    tone3.currentTime = 0;
    tone3.play();
});

let digit7 = document.querySelector(".row:nth-child(3) .digit:nth-child(1)");
digit7.addEventListener("click", function () {
    show.innerText += "7";
    tone1.currentTime = 0;
    tone1.play();
});

let digit8 = document.querySelector(".row:nth-child(3) .digit:nth-child(2)");
digit8.addEventListener("click", function () {
    show.innerText += "8";
    tone2.currentTime = 0;
    tone2.play();
});

let digit9 = document.querySelector(".row:nth-child(3) .digit:nth-child(3)");
digit9.addEventListener("click", function () {
    show.innerText += "9";
    tone3.currentTime = 0;
    tone3.play();
});
