const icons = document.querySelectorAll(".icon");
const indicator = document.querySelector(".indicator");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const iconPos =
      icon.getBoundingClientRect().left +
      icon.getBoundingClientRect().width / 2;

    indicator.style.left = iconPos + "px";

    if (icon.classList.contains(".solid")) {
      icon.classList.add("active");
    } else {
      console.log(icon.classList);
    }
  });
});
