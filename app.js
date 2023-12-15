let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let time = false;

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let restartBtn = document.querySelector(".restart");

let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let counter = document.querySelector("#count");

let click = true

startBtn.addEventListener("click", () => {
    if (click) {
        time = true
        timer();
        click = false
    }
})
stopBtn.addEventListener("click", () => {
    time = false;
    click = true
})
restartBtn.addEventListener("click", () => {
    time = false
    click = true

    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    hr.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    counter.innerHTML = "00";

})


function timer() {
    if (time) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
        setTimeout(timer, 10)

        hr.innerHTML = hour;
        min.innerHTML = minute;
        sec.innerHTML = second;
        counter.innerHTML = count;
    }
}
