const range = document.querySelector(".range");
const progress = range.querySelector(".progress");
const thumb = range.querySelector(".thumb");
const value = range.querySelector(".value");

const progressRadius = parseFloat(progress.getAttribute("r"));
const progressPerimeter = progressRadius * 2 * Math.PI;
const progressCx = parseFloat(progress.getAttribute("cx"));
const progressCy = parseFloat(progress.getAttribute("cy"));

let isRotating = false;

function getMouseAngle(e) {
  const x = e.clientX || e.pageX;
  const y = e.clientY || e.pageY;

  const bcr = range.getBoundingClientRect();
  const cx = bcr.left + bcr.width / 2;
  const cy = bcr.top + bcr.height / 2;

  const a = Math.atan2(y - cy, x - cx) + Math.PI / 2;

  return a >= 0 ? a : a + Math.PI * 2;
}

thumb.addEventListener("mousedown", () => {
  isRotating = true;
  document.documentElement.style.cursor = "pointer";
});

document.addEventListener("mousemove", (e) => {
  if (isRotating) {
    const angle = getMouseAngle(e);
    const percent = angle / (Math.PI * 2);

    progress.setAttribute(
      "stroke-dasharray",
      `${percent * progressPerimeter} 10000`
    );

    thumb.setAttribute(
      "cx",
      `${progressCx + Math.cos(angle) * progressRadius}`
    );
    thumb.setAttribute(
      "cy",
      `${progressCx + Math.sin(angle) * progressRadius}`
    );

    value.innerHTML = `${Math.round(percent * 100)}%`;
  }
});

document.addEventListener("mouseup", () => {
  isRotating = false;
  document.documentElement.style.cursor = null;
});
