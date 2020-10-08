var h = 0;
var m = 0;
var s = 0;
var ms = 0;

var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");

var startBtn = document.getElementById("start-btn")
var resetBtn = document.getElementById("reset-btn")

var interval;

function timer() {
    ms++
    msec.innerHTML = ms;
    if (ms >= 100) {
        s++
        sec.innerHTML = s;
        ms = 0;
        if (s < 10) {
            sec.innerHTML = "0" + s;
        }
        if (s >= 60) {
            m++
            min.innerHTML = m;
            s = 0;
        }

        if (m < 10) {
            min.innerHTML = "0" + m;
        }
        if (m >= 60) {
            h++
            hour.innerHTML = h;
            m = 0;
        }

        if (h < 10) {
            hour.innerHTML = "0" + h;
        }
    }
}

function start() {
    startBtn.innerText = "PAUSE";
    startBtn.onclick = pause;
    interval = setInterval(timer, 10)
}

function pause() {
    startBtn.innerText = "START";
    startBtn.onclick = start;
    clearInterval(interval);
}

function reset() {
    h = 00;
    m = 00;
    s = 00;
    ms = 00;
    hour.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    msec.innerHTML = "00";
    clearInterval(interval)
    startBtn.innerText = "START";
    startBtn.onclick = start;
}