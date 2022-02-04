const draggable = document.querySelector('.draggable');
const wrapper = document.querySelector('.wrapper');

let isDragging = false;
let isZooming = false;
let startFingerDistance = 0
let startZoom = 1;
let zoom = 1;

function clamp(n, min, max) {
    return Math.max(min, Math.min(n, max));
}

function clampReverse(n, min, max) {
    return Math.min(min, Math.max(n, max));
}

function getTouchPosition(touches) {
    let x = 0
    let y = 0

    for (let i = 0; i < touches.length; i++) {
        const touch = touches[i];
        x += touch.pageX
        y += touch.pageY
    }
    return [
        x / touches.length,
        y / touches.length
    ]
}

function setPosition(x, y) {
    const wb = wrapper.getBoundingClientRect();
    const db = draggable.getBoundingClientRect();

    const left = clampReverse(x, 0, wb.width - db.width);
    const top = clampReverse(y, 0, wb.height - db.height);

    draggable.style.left = `${left}px`;
    draggable.style.top = `${top}px`;
}

function startPan(ex, ey) {
    dx = ex - draggable.offsetLeft;
    dy = ey - draggable.offsetTop;

    isDragging = true;
}

function pan(ex, ey) {
    if (isDragging === true) {
        let left = ex - dx;
        let top = ey - dy;

        setPosition(left, top)
    }
}

function endPan() {
    isDragging = false;
}

function setZoom(zoomFactor, ex, ey, reposition = true) {
    const wb = wrapper.getBoundingClientRect();

    const x = ex - wb.left;
    const y = ey - wb.top;

    const xp = (x - draggable.offsetLeft) / draggable.width
    const yp = (y - draggable.offsetTop) / draggable.height

    zoom = clamp(zoomFactor, 1, 100);

    draggable.style.width = `${100 * zoom}%`;
    // draggable.style.height = `${100 * zoom}%`;

    if (reposition) {
        const left = x - draggable.width * xp
        const top = y - draggable.height * yp

        setPosition(left, top)
    }
}

draggable.addEventListener('mousedown', (e) => {
    startPan(e.pageX || e.clientX, e.pageY || e.clientY)
});

draggable.addEventListener('touchstart', (e) => {
    e.preventDefault()

    const [x, y] = getTouchPosition(e.touches)

    startPan(x, y)

    if (e.touches.length === 2) {
        isZooming = true;

        startFingerDistance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY,
        )

        startZoom = zoom;
    }
})

document.addEventListener("mousemove", (e) => {
    pan(e.pageX || e.clientX, e.pageY || e.clientY)
});

document.addEventListener('touchmove', (e) => {
    e.preventDefault()
    const [x, y] = getTouchPosition(e.touches)

    if (isZooming && e.touches.length === 2) {
        const fingerDistance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY,
        )

        const mx = Math.min(e.touches[0].pageX, e.touches[1].pageX);
        const my = Math.min(e.touches[0].pageY, e.touches[1].pageY);

        setZoom(startZoom * (fingerDistance / startFingerDistance), mx, my)
    } else if (isDragging) {
        if (isZooming) {
            isZooming = false
            startPan(x, y)
        }

        pan(x, y)
    }
})

document.addEventListener('mouseup', () => {
    endPan()
});

document.addEventListener('touchend', stopTouchHandler)
document.addEventListener('touchcancel', stopTouchHandler)

function stopTouchHandler(e) {
    e.preventDefault()
    const [x, y] = getTouchPosition(e.touches)

    if (e.touches.length < 2) {
        isZooming = false
        startPan(x, y)
    }

    if (e.touches.length === 0) {
        endPan()
    }
}

wrapper.addEventListener('wheel', (e) => {
    setZoom(zoom - e.deltaY / 1000, e.pageX || e.clientX, e.pageY || e.clientY);
})