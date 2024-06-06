const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const hour_display = document.querySelector("#hour");
const min_display = document.querySelector("#minute");
const sec_display = document.querySelector("#sec");
const paras = document.querySelectorAll(".p-in");
const restart_btn = document.getElementById("restart");

let timer = false;
let hour = 0;
let min = 0;
let sec = 0;
let count = 0;

start_btn.addEventListener("click", () => {
  timer = true;
  start_btn.style.display = "none";
  stop_btn.style.display = "block";
  startTimer();
});

stop_btn.addEventListener("click", () => {
  timer = false;
  start_btn.style.display = "block";
  stop_btn.style.display = "none";
  restart_btn.style.visibility = "visible";
})

restart_btn.addEventListener("click", () => {
  count, hour, min, sec = 0;
  timer = true;
  startTimer();
  start_btn.style.display = "none";
  stop_btn.style.display = "block";
})

function startTimer() {
  if (timer) {
    count++;
    if (count == 100) {
      sec++;
      count = 0;
    }
    if (sec == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }

    document.getElementById("count").innerText = count;
    if(sec<10){
      sec_display.innerText = "0" + sec;
    } else{
      sec_display.innerText = sec;
    }
    if(min<10){
      min_display.innerText = "0" + min;
    } else{
      min_display.innerText = min;
    }
    if(hour<10){
      hour_display.innerText = "0" + hour;
    } else{
      hour_display.innerText = hour;
    }
    setTimeout(startTimer, 10);
  }
}