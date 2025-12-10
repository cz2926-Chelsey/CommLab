let wall = document.querySelector(".wall");
let whys = document.querySelectorAll('.why');
let begin = document.querySelector("#beginSound");

window.addEventListener("load", function(){
begin.play();
    });

setTimeout(function () {
    whys.forEach(function (item) {
        item.classList.add('show');
    });
}, 3000);

