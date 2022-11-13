const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isPlaying = true;
let level = 'easy'

const width = canvas.width
const height = canvas.height

ctx.font = "400px Arial";
ctx.fillText("Snake",width/9 , height/2)

ctx.font = "100px Arial";
const levels = {
    easyTxt: {
        name: "Easy",
        width: ctx.measureText("Easy").width,
        height: ctx.measureText("Easy").height,
    },
    mediumTxt: {
        name: "Medium",
        width: ctx.measureText("Medium").width,
        height: ctx.measureText("Medium").height,
    },
    hardTxt: {
        name: "Hard",
        width: ctx.measureText("Hard").width,
        height: ctx.measureText("Hard").height,
    },
}

console.log(ctx.measureText("Hard"))

ctx.fillText(levels.easyTxt.name,width/7 , 3 * height/4)
ctx.fillText(levels.mediumTxt.name,4 * width/11 , 3 * height/4)
ctx.fillText(levels.hardTxt.name,4 * width/6 , 3 * height/4)

ctx.beginPath()
ctx.rect(80, 2 * height/6, 50, 50)
ctx.fillRect(80, 2 * height/6, 50, 50)

ctx.rect(width - 120, 2 * height/6, 50, 50)
ctx.fillRect(width - 120, 2 * height/6, 50, 50)

// const getLevelHandler = (mousePosX, mousePosY) => {
    // if (mousePosX > width/7 && )
// }

// canvas.addEventListener(('mousemove'), (e) => {
//     const mousePosX = e.clientX || e.pageX
//     const mousePosY = e.clientY || e.pageY
//     getLevelHandler(mousePosX, mousePosY)
// })

console.log(levels)

