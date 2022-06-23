const icons = document.querySelectorAll(".icon");
const solidIcons = document.querySelectorAll(".solid");
const tabbar = document.querySelector(".tabbar");
const indicator = document.querySelector(".indicator");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const iconPos = Math.abs(
      tabbar.getBoundingClientRect().left -
        (icon.getBoundingClientRect().left +
          icon.getBoundingClientRect().width / 2)
    );
    indicator.style.left = iconPos + "px";

    icon.parentElement.classList.add("active");
  });
  icon.parentElement.classList.remove("active");
});
