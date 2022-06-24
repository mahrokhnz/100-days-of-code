const icons = document.querySelectorAll(".icon");
const solidIcons = document.querySelectorAll(".solid");
const tabbar = document.querySelector(".tabbar");
const indicator = document.querySelector(".indicator");
const menuItems = document.querySelectorAll(".menuItem");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });

    const iconPos = Math.abs(
      tabbar.getBoundingClientRect().left -
        (icon.getBoundingClientRect().left +
          icon.getBoundingClientRect().width / 2)
    );
    indicator.style.left = iconPos + "px";

    if (!icon.parentElement.classList.contains("active")) {
      icon.parentElement.classList.add("active");
    }
  });
});

// TODO: ADD BUBBLE BLOB AND FIX TIMING
