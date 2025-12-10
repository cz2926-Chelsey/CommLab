let cafeword = document.querySelector(".cafeword");

cafeword.addEventListener("mouseover", function () {
    cafeword.innerText = "No way!";
});

let btn = document.querySelector("#triggerBtn");
let area = document.querySelector("#Area");
let eyeSound = document.querySelector("#eyeSound");

btn.addEventListener("click", function () {

    let eyes = document.createElement("span");
    eyes.textContent = "eye";
    eyes.classList.add("eye");

    let x = Math.random() * window.innerWidth;
    let y = window.scrollY + Math.random() * window.innerHeight;

    eyes.style.left = x + "px";
    eyes.style.top = y + "px";

    area.appendChild(eyes);
    eyeSound.currentTime = 0;
    eyeSound.play();

    sound1.pause();
    // sound1.currentTime = 0;

    sound2.pause();
    // sound2.currentTime = 0;

    sound3.pause();
    // sound3.currentTime = 0;

});


let soundone = document.querySelector(".soundone");
let sound1 = document.querySelector("#oneSound");

soundone.addEventListener("click", function () {
    sound1.play();
});

let soundtwo = document.querySelector(".soundtwo");
let sound2 = document.querySelector("#twoSound");

soundtwo.addEventListener("click", function () {
    sound2.play();
});

let soundthree = document.querySelector(".soundthree");
let sound3 = document.querySelector("#threeSound");

soundthree.addEventListener("click", function () {
    sound3.play();
});

