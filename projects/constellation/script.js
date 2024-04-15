const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseP = {x: 0, y: 0}

const stars = new Array(230).fill(0).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 0.6,
    color: 'rgba(255, 255, 255, .5)',
    sx: 0.1 - (Math.random() * 0.5),
    sy: 0.1 - (Math.random() * 0.5),
}));

function drawStars() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2, false);
        ctx.fill();
    });
}

function animate() {
    stars.forEach((star) => {
        star.x += star.sx;
        star.y += star.sy;

        if (star.x < star.r || star.x > canvas.width - star.r) {
            star.sx = -star.sx
        }

        if (star.y < star.r || star.y > canvas.height - star.r) {
            star.sy = -star.sy
        }
    });

    drawStars();
    detectStars(mouseP)

    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)

const pythagoras = (firstPoint, secondPoint) => {
    const xd = Math.abs(firstPoint.x - secondPoint.x)
    const yd = Math.abs(firstPoint.y - secondPoint.y)
    return Math.sqrt(Math.pow(xd, 2) + Math.pow(yd, 2))
}

const detectLines = (nearStars) => {
    for (let i = 0; i < nearStars.length; i++) {
        for (let j = 1; j < nearStars.length - 1; j++) {
            const diff = pythagoras(nearStars[i], nearStars[j])

            if (diff < 150) {
                ctx.beginPath()
                ctx.moveTo(nearStars[i].x, nearStars[i].y)
                ctx.lineTo(nearStars[j].x, nearStars[j].y)
                ctx.strokeStyle = "rgba(255, 0, 180, .5)"
                ctx.stroke()
                ctx.closePath()
            }
        }
    }
}

const detectStars = (mouse) => {
    const nearStars = []
    stars.forEach((star) => {
        const diff = pythagoras(mouse, star)

        if (diff < 150) {
            nearStars.push(star)
        }
    })

    detectLines(nearStars)
}

canvas.addEventListener("mousemove", (e) => {
    mouseP = {x: e.pageX, y: e.pageY}

    detectStars(mouseP)
});