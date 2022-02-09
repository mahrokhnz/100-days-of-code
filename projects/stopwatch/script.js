const timer = document.querySelector(".showTimer");
const handle = document.querySelector(".handle");
const reset = document.querySelector(".reset");

let time = 0;
let isActive = false;
let isReset = false;
let nIntervalId;

function activateCondition() {
  if (isActive) {
    handle.innerHTML = "Stop";
  } else {
    handle.innerHTML = "Start";
  }
}

function countingHandler() {
  if (!nIntervalId) {
    nIntervalId = setInterval(timerHandler, 1000);
  }
}

function timerHandler() {
  if (!isReset) {
    time += 1;
  } else {
    time = 0;
    isReset = false;
  }

  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  timer.innerHTML = `${getHours}:${getMinutes}:${getSeconds}`;
}

function activePauseHandler() {
  if (!isActive) {
    countingHandler();
    isActive = true;
  } else {
    clearInterval(nIntervalId);
    nIntervalId = null;
    isActive = false;
  }
  activateCondition();
}

function resetHandler() {
  clearInterval(nIntervalId);
  isReset = true;
  timerHandler();
  isActive = true;
  activePauseHandler();
}

handle.addEventListener("click", activePauseHandler);
reset.addEventListener("click", resetHandler);
