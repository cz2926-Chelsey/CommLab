let lastSecond = -1;
let sign = document.querySelector("#signSound");
let fail = document.querySelector("#failSound");

function getTheTime() {
    let now = new Date();

    let m = now.getMinutes();
    let s = now.getSeconds();

    console.log(m, s);

    if (s != lastSecond) {
        let gray = Math.floor((s / 59) * 255);
        if (s > 0) {
            document.body.style.backgroundColor =
              "rgb(" + gray + "," + gray + "," + gray + ")";
        }

        sign.currentTime = 0;
        sign.play();

        if (s == 0) {
            document.body.style.backgroundColor = "rgb(0,0,0)";
            fail.currentTime = 0;
            fail.play();
        }
    }
}

setInterval(getTheTime, 1000);