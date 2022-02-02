const ball = document.querySelector('.container');

let isRotating = false;
let startMouseAngle = 0;
let startBallAngle = 0;
let ballAngle = 0;

function getMouseAngle(e) {
    const x = e.pageX || e.clientX;
    const y = e.pageY || e.clientY;

    const cx = ball.offsetLeft + ball.clientWidth / 2;
    const cy = ball.offsetTop + ball.clientHeight / 2;

    return Math.atan2(y - cy, x - cx) * 180 / Math.PI;
}


ball.addEventListener('mousedown', (e) => {
    startMouseAngle = getMouseAngle(e);
    startBallAngle = ballAngle;

    isRotating = true
})

document.addEventListener('mouseup', (e) => {
    isRotating = false
})

document.addEventListener('mousemove', (e) => {
    if (isRotating) {
        const currentMouseAngle = getMouseAngle(e);

        ballAngle = startBallAngle + (currentMouseAngle - startMouseAngle);

        ball.style.transform = `rotateZ(${ballAngle}deg)`
    }
})

