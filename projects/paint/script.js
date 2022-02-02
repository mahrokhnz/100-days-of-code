const board = document.querySelector('.board')
const ctx = board.getContext("2d");
let circle = document.createElement("div");

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();

board.addEventListener('mousemove', (e) => {
    const x = e.pageX || e.clientX
    const y = e.pageY || e.clientY

    document.body.appendChild(circle)
    circle.classList.add('circlePointer')
    circle.style.left = `${x}px`
    circle.style.top = `${y}px`
})
