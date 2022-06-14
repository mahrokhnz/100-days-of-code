const lightIcons = document.querySelectorAll(".light");
const solidIcons = document.querySelectorAll(".solid");
const tabbar = document.querySelector(".tabbar");
const indicator = document.querySelector(".indicator");

const indicatorPosition = (left) => {
  indicator.style.left = `${left}px`;
};

const closestNumber = (goal) => {
  const validIndicatorPosition = [60, 160, 260, 360];

  const closest = validIndicatorPosition.reduce(function (prev, curr) {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });

  indicatorPosition(closest);
};

const mousePositionCalculator = (e) => {
  const tabbarPosition =
    tabbar.offsetLeft - tabbar.getBoundingClientRect().width / 2;
  const whereCLicked = e.clientX - tabbarPosition;

  closestNumber(whereCLicked);
};

// TODO not working
lightIcons.forEach((icon) => {
  icon.classList.remove("active");
  icon.addEventListener("click", (e) => {
    mousePositionCalculator(e);

    icon.classList.add("active");
  });
});
