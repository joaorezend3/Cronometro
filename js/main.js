"user strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cronometro;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();
function start() {
  pause();
  cronometro = setInterval(() => {
    timer();
  }, 10);
}
function pause() {
  clearInterval(cronometro);
}
function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById("hour").innerText = "00";
  document.getElementById("minute").innerText = "00";
  document.getElementById("second").innerText = "00";
  document.getElementById("millisecond").innerText = "000";
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById("hour").innerText = returnHora(hour);
  document.getElementById("minute").innerText = returnHora(minute);
  document.getElementById("second").innerText = returnHora(second);
  document.getElementById("millisecond").innerText = returnHora(millisecond);
}

function returnHora(input) {
  return input > 10 ? input : `0${input}`;
}
/*end*/
