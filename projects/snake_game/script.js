const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let isPlaying = true;
let level = 'easy'

let x = 0;
let y = 0;


let i = 0
while (i <= 673) {
    ctx.strokeStyle = "gray";
    ctx.strokeRect(x, y, 20, 20);

    x += 20

    if (x > 520) {
        y += 20
        x = 0
    }

    i ++
}