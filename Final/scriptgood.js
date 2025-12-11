let answerBtn = document.querySelector("#answerBtn");
let statusText = document.querySelector("#statusText");
let helloText = document.querySelector("#helloText");
let crySound = document.querySelector("#crySound");
let bgm = document.querySelector("#bgm");
let count = 0;
let timer;

answerBtn.addEventListener("click", function () {

    statusText.innerText = "Connected.";
    answerBtn.style.display = "none";

    helloText.classList.remove("hidden");
    helloText.classList.add("show");

    document.body.style.backgroundColor = "#d1cb5bff";

    setTimeout(function () {
        crySound.currentTime = 0;
        crySound.play();
    }, 1000);

    setTimeout(function () {
        timer = setInterval(function () {
            count = count + 1;
            bgm.play();

            if (count == 1) {
                let t1 = document.querySelector(".text1");
                t1.classList.remove("hidden");
                t1.classList.add("show");
            }

            if (count == 2) {
                let t2 = document.querySelector(".text2");
                t2.classList.remove("hidden");
                t2.classList.add("show");
            }

            if (count == 3) {
                let t3 = document.querySelector(".text3");
                t3.classList.remove("hidden");
                t3.classList.add("show");
            }

            if (count == 4) {
                let t4 = document.querySelector(".text4");
                t4.classList.remove("hidden");
                t4.classList.add("show");
            }

            if (count == 5) {
                let t5 = document.querySelector(".text5");
                t5.classList.remove("hidden");
                t5.classList.add("show");
            }

            if (count == 6) {
                let t6 = document.querySelector(".text6");
                t6.classList.remove("hidden");
                t6.classList.add("show");
            }

            if (count == 7) {
                let t7 = document.querySelector(".text7");
                t7.classList.remove("hidden");
                t7.classList.add("show");
            }

            if (count == 8) {
                let t8 = document.querySelector(".text8");
                t8.classList.remove("hidden");
                t8.classList.add("show");
            }

            if (count == 9) {
                let t9 = document.querySelector(".text9");
                t9.classList.remove("hidden");
                t9.classList.add("show");
            }

            if (count == 10) {
                let t10 = document.querySelector(".text10");
                t10.classList.remove("hidden");
                t10.classList.add("show");
            }

            if (count == 11) {
                let t11 = document.querySelector(".text11");
                t11.classList.remove("hidden");
                t11.classList.add("show");
            }

            if (count == 12) {
                let t12 = document.querySelector(".text12");
                t12.classList.remove("hidden");
                t12.classList.add("show");
            }

            if (count >= 12) {
                clearInterval(timer);
            }

        }, 2500);  

    }, 3000); 
});