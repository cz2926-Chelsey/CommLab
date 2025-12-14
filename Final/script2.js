// ring
let ringWord = document.querySelector("#ringWord");
let bellSound = document.querySelector("#bellSound");

if (ringWord && bellSound) {
    ringWord.addEventListener("click", function () {
        bellSound.currentTime = 0;
        bellSound.play();
    });
}
// open
let openLocker = document.querySelector("#openLocker");
let lockerItems = document.querySelector("#lockerItems");

if (openLocker && lockerItems) {
    openLocker.addEventListener("click", function () {
        lockerItems.classList.add("show-items");
    });
}
// items
// rat
let rat = document.querySelector(".locker-item.rat");
let screamSound = document.querySelector("#screamSound");
if (rat && screamSound) {
    rat.addEventListener("click", function () {
        screamSound.currentTime = 0;
        screamSound.play();
    });
}
// bag
let bag = document.querySelector(".locker-item.bag");

if (bag) {
    bag.addEventListener("click", function () {
        window.location.href = "locker-cockroach.html";
    });
}