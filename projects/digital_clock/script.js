const time = document.querySelector(".time");

function timeFormat() {
  let clock = new Date();

  time.innerText = clock.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
}

function updateTime() {
  setInterval(() => {
    timeFormat();
  }, 1000);
}

window.onload = function () {
  timeFormat();
  updateTime();
};
