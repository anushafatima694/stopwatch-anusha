var minutes = 0;
var seconds = 0;
var miliSec = 0;
var showMinutes = document.getElementById('min');
var showSeconds = document.getElementById('sec');
var showmiliSeconds = document.getElementById('miliSec');

var setTime;

function timeStart() {
    miliSec++
    showmiliSeconds.innerHTML = miliSec
    if (miliSec == 100) {
        seconds++
     showSeconds.innerHTML = seconds
        miliSec = 0
    } else if (seconds == 60) {
        minutes++
     showMinutes.innerHTML = minutes
     seconds = 0
    }
}

function timerStart(){
    document.getElementById('startbtn').style.display = 'none'
    setTime= setInterval(timeStart, 10)
}

function timerReset(){
minutes=0
seconds=0
miliSec=0
timerPause()
showmiliSeconds.innerHTML = miliSec
showSeconds.innerHTML = seconds
showMinutes.innerHTML = minutes
}
function timerPause(){
    document.getElementById('startbtn').style.display = 'inline-block'
    clearInterval(setTime)
    
}