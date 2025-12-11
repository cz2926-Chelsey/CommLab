let foods = document.querySelectorAll(".food");
let bgm = document.querySelector("#bgm");
let bite = document.querySelector("#bite");
let back = document.querySelector("#backLink");
let eatNumber = 0;


foods.forEach(function (food) {
    bgm.play()

    let x = Math.random() * 70 + 10;
    let y = Math.random() * 70 + 10;

    food.style.left = x + "vw";
    food.style.top = y + "vh";

    food.addEventListener("click", function () {

        if (bite) {
            bite.currentTime = 0;
            bite.play();
        }
        let lastLetter = food.lastElementChild;

        if (lastLetter) {
            lastLetter.remove();
        }
        eatNumber = eatNumber + 1;
        if (eatNumber >= 13) {
            back.style.opacity = 1;
            back.style.pointerEvents = "auto";
        }
    });

});