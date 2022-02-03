const brushColor = document.querySelector('.color')
const brushSize = document.querySelector('.range');
const eraser = document.querySelector('.erase');
const reset = document.querySelector('.reset');
const board = document.querySelector('.board');

const ctx = board.getContext("2d");
let circle = document.createElement("div");

let isDrawing = false;

board.addEventListener('mousedown', (e) => {
    const x = e.pageX || e.clientX;
    const y = e.pageY || e.clientY;

    ctx.lineWidth = brushSize.value;
    ctx.strokeStyle = brushColor.value;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = "round";

    isDrawing = true;
});

document.addEventListener('mousemove', (e) => {
    const x = e.pageX || e.clientX;
    const y = e.pageY || e.clientY;

    document.body.appendChild(circle);
    circle.classList.add('circlePointer');
    circle.style.width = `${brushSize.value}px`;
    circle.style.height = `${brushSize.value}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    board.style.cursor ='none';

    if (isDrawing) {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

reset.addEventListener('click', () => {
    ctx.clearRect(0, 0, board.width, board.height);
});


