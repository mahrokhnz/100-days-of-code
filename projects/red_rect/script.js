import Rect from "./classes/rect";

const canvas = document.getElementById("myCanvas");

//FULL SCREEN CANVAS
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

new Rect(100, 100, 400, 400).setFill("blue").draw(ctx);
