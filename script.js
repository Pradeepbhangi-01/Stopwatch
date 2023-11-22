//initializing  the variables
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let hours = 0;
let minutes = 0;
let seconds = 0;
let count = 0;
let counter = true;
let startWatch = true;

//For start button
start.addEventListener("click", () => {
  counter = true;
  if (startWatch) {
    stopWatch();
    startWatch = false;
  }
});

//For stop button
stop.addEventListener("click", () => {
  counter = false;
  startWatch = true;
});

//To reset
reset.addEventListener("click", () => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  count = 0;
  counter = false;
  startWatch = true;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
});

//Timer function
function stopWatch() {
  if (counter) {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
      seconds = 0;
    }
    let hrString = hours;
    let minString = minutes;
    let secString = seconds;
    if (hours < 10) {
      hrString = "0" + hrString;
    }
    if (minutes < 10) {
      minString = "0" + minString;
    }
    if (seconds < 10) {
      secString = "0" + secString;
    }
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;

    setTimeout(stopWatch, 1000);
  }
}
