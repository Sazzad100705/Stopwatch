let timerDiplay = document.querySelector('.timerDiplay');
let stopBtn = document.getElementById ('stopBtn');
let startBtn = document.getElementById ('startBtn');
let resetBtn = document.getElementById ('resetBtn');
let video = document.getElementById("myVideo");

function stopVideo() {
  if (video.play) {
    video.pause();
    btn.innerHTML = "Pause";
  } 
}

function startVideo() {
    if (video.pause) {
      video.play();
      btn.innerHTML = "Play";
    }
  }

let msecs = 0;
let secs = 0;
let mins = 0;

let timerID = null;

startBtn.addEventListener('click', function(){
    if (timerID != null) {
        clearInterval(timerID);
    }
    timerID = setInterval(startTimer, 10);
})

stopBtn.addEventListener('click', function(){
    clearInterval(timerID);
})

resetBtn.addEventListener('click', function(){
    clearInterval(timerID);
    timerDiplay.innerHTML = `00 : 00 : 00`;
    msecs = secs = mins = 0;
})

function startTimer() {
    msecs++;
    if (msecs == 100) {
        msecs = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
        
    }

    let msecString = msecs < 10 ? `0${msecs}` : msecs;
    let secString = secs < 10 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins;

    timerDiplay.innerHTML = `${minString} : ${secString} : ${msecString}`;
}

