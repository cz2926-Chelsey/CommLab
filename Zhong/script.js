let sky = document.querySelector("#sky");
let puddle = document.querySelector("#puddle");
let lastSecond = 0;



function getTime() {
  let now = new Date(); 

  let h = now.getHours();      // 0–23
  let m = now.getMinutes();    // 0–59
  let s = now.getSeconds();    // 0–59

console.log(h, m, s);

  if (s !== lastSecond) {   // true if x is *not* equal to lastSecond
    createDrop(s);
    lastSecond = s;  // 记住了如果没有这个部分，那么每次条件都会为真，同一秒内会有n滴雨
  }
}


function createDrop(second) {
  let drop = document.createElement("div");
  drop.classList.add("drop");


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


  let newWidth = 10 + (second / 59) * 70;   // 10 ~ 80
  let newHeight = 5 + (second / 59) * 10;   // 5 ~ 15
  let newOpacity = 0.6 + (second / 59) * 0.3; // 0.6 ~ 0.9

  puddle.style.width = newWidth + "vw";
  puddle.style.height = newHeight + "vh";
  puddle.style.opacity = newOpacity.toString();
}

setInterval(getTime, 1000);
getTime();
