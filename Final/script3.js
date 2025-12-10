let s = document.querySelector("#cockroachText span");
console.log(s);

function move(eventInfo) {
  console.log(eventInfo.target);

  let elementThatWasMouseOvered = eventInfo.target;
  elementThatWasMouseOvered.style.color = "brown";

  let randomX = -300 + Math.random() * 600;
  let randomY = -300 + Math.random() * 600;

  elementThatWasMouseOvered.style.transform = "translate(" + randomX + "px," + randomY + "px)";
}

s.addEventListener("mouseover", move)

function addMover(element) {
  element.addEventListener("mouseover", move);
}
let allSpans = document.querySelectorAll("#cockroachText span");

allSpans.forEach(addMover);


let trigger = document.querySelector(".bug-seed");
let text = document.querySelector("#cockroachText");

trigger.addEventListener("mouseover", function () {
  text.classList.add("show");
});

let start = document.querySelector("#sound");

trigger.addEventListener("click", function () {
  start.play();
});


let exit = document.querySelector("#exit");
