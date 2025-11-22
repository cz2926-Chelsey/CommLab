let sky = document.querySelector("#sky");
let puddle = document.querySelector("#puddle");
let lastSecond = 0;

let water = document.createElement("audio");
let drink = document.createElement("audio");
water.src = "waterdrop.WAV";
drink.src = "drinkwater.WAV";


function getTime() {
  let now = new Date(); 

  let h = now.getHours();      // 0–23
  let m = now.getMinutes();    // 0–59
  let s = now.getSeconds();    // 0–59

console.log(h, m, s);

  if (s !== lastSecond) {   // true if x is *not* equal to lastSecond
    createDrop(s);
    lastSecond = s; 
  }
  if (s == 0) {
    drink.play();
}
}


function createDrop(one) {
  let drop = document.createElement("div");
  drop.classList.add("drop");
  water.play();

  
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


  let newWidth = 5 + (one / 59) * 95;   // 10 ~ 80
  let newHeight = 5 + (one / 59) * 10;   // 5 ~ 15
  let newOpacity = 0.6 + (one / 59) * 0.3; // 0.6 ~ 0.9

  puddle.style.width = newWidth + "vw";
  puddle.style.height = newHeight + "vh";
  puddle.style.opacity = newOpacity;
}


setInterval(getTime, 1000);
getTime();
