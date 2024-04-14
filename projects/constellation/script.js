const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//FULL SCREEN CANVAS
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//CIRCLES
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

    stars.forEach((circle) => {
        ctx.fillStyle = circle.color;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
        ctx.fill();
    });
}

function animate() {
    stars.forEach((circle) => {
        circle.x += circle.sx;
        circle.y += circle.sy;

        if (circle.x < circle.r || circle.x > canvas.width - circle.r) {
            circle.sx = -circle.sx
        }

        if (circle.y < circle.r || circle.y > canvas.height - circle.r) {
            circle.sy = -circle.sy
        }
    });

    drawStars();

    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)

const pythagoras = (firstPoint, secondPoint) => {
    const xd = Math.abs(firstPoint.x - secondPoint.x)
    const yd = Math.abs(firstPoint.y - secondPoint.y)
    const powerDiff = Math.pow(xd, 2) + Math.pow(yd, 2)
    return Math.sqrt(powerDiff)
}

const detectLines = (nearStars) => {
    for (let i = 0; i < nearStars.length; i++) {
        for (let j = 1; j < nearStars.length - 1; j++) {
            const diff = pythagoras(nearStars[i], nearStars[j])

            if (diff < 100) {
                ctx.beginPath()
                ctx.moveTo(nearStars[i].x, nearStars[i].y)
                ctx.lineTo(nearStars[j].x, nearStars[j].y)
                ctx.stroke()
                ctx.closePath()
            }
        }
    }
}

const detectStars = (mouse) => {
    const nearStars = []
    stars.map((star) => {
        const diff = pythagoras(mouse, star)

        if (diff < 100) {
            nearStars.push(star)
        }
    })

    detectLines(nearStars)
}

canvas.addEventListener("mousemove", (e) => {
    detectStars({x: e.pageX, y: e.pageY})
});