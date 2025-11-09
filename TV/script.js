let testcard = document.querySelector('.testcard');

function power() {
  testcard.classList.toggle("on");       
}

function channel() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  testcard.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

  let w = 200 + Math.random() * 700;
  let h = 150 + Math.random() * 500;
  testcard.style.width = w + "px";
  testcard.style.height = h + "px";
}
function addNews() {
  let screen = document.querySelector(".tv");
  let p = document.createElement("p");                  
  p.innerText = "Breaking News: No class on Sunday!";   
  p.className = "news";                                 

  let randomLeft = Math.floor(Math.random() * 80) + 10; 
  let randomTop = Math.floor(Math.random() * 80) + 10;  

  p.style.left = randomLeft + "%";
  p.style.top = randomTop + "%";

  screen.append(p); 
}
function shimmerAllNews() {
  function colorize(oneNews) {
    oneNews.style.color = "violet";
}
let allNews = document.querySelectorAll(".news");
allNews.forEach(colorize);
}




