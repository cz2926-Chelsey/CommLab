let sky = document.querySelector("#sky");
let puddle = document.querySelector("#puddle");
let lastSecond = 0;

// sounds
let dropSound = document.createElement("audio");
dropSound.src = "waterdrop.WAV";
dropSound.preload = "auto";

let resetSound = document.createElement("audio");
resetSound.src = "drinkwater.WAV";
resetSound.preload = "auto";

function updateClock() {
  let now = new Date();
  let s = now.getSeconds();  // 0–59


  if (s !== lastSecond) {   // true if x is *not* equal to lastSecond
    createDrop(s);
    updatePuddle(s);
    lastSecond = s;  // 记住了如果没有这个部分，那么每次条件都会为真，同一秒内会有n滴雨
  }
}


function createDrop(second) {
  let drop = document.createElement("div");
  drop.classList.add("drop");
  dropSound.currentTime = 0;
  dropSound.play();


  let randomX = Math.random() * 100;     
  drop.style.left = randomX + "vw";

  sky.appendChild(drop);


  setTimeout(function () {    // Up to down
    drop.style.transform = "translateY(100vh)";
    drop.style.opacity = "0";
  }, 20);


  setTimeout(function () {   // 1 秒后移除这滴雨
    drop.remove();
  }, 950);
}

function updatePuddle(second) {
  if (second === 0) {
    return;
    resetSound.currentTime = 0;
    resetSound.play();
  }

  let newWidth = 10 + (second / 59) * 70;   // 10 ~ 80
  let newHeight = 5 + (second / 59) * 10;   // 5 ~ 15
  let newOpacity = 0.6 + (second / 59) * 0.3; // 0.6 ~ 0.9

  puddle.style.width = newWidth + "vw";
  puddle.style.height = newHeight + "vh";
  puddle.style.opacity = newOpacity.toString();
}

// 每秒检查一次
// setInterval(updateClock, 200);
// updateClock();

setInterval(function() {
  console.log("tick"); 
  updateClock(); 
}, 200); 


let started = false;

function startRain() {
  if (started) return;
  started = true;

  dropSound.play().then(() => {
    dropSound.pause();
    dropSound.currentTime = 0;
  });

  resetSound.play().then(() => {
    resetSound.pause();
    resetSound.currentTime = 0;
  });

   updateClock();
  setInterval(updateClock, 200);

  document.removeEventListener("click", startRain);
}

document.addEventListener("click", startRain);