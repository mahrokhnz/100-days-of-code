const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isPlaying = true;
let rectReq;

const width = canvas.width
const height = canvas.height

ctx.font = "400px Arial";
ctx.fillText("Snake",width/9 , height/2)

ctx.font = "100px Arial";
ctx.fillText("Easy",width/7 , 3 * height/4)
ctx.fillText("Medium",4 * width/11 , 3 * height/4)
ctx.fillText("Hard",4 * width/6 , 3 * height/4)

ctx.beginPath()
ctx.rect(80, 2 * height/6, 50, 50)
ctx.fillRect(80, 2 * height/6, 50, 50)

ctx.rect(width - 120, 2 * height/6, 50, 50)
ctx.fillRect(width - 120, 2 * height/6, 50, 50)

