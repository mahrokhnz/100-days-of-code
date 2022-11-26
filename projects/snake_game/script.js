const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let isPlaying = true;
let level = 'easy'

let x = 0;
let y = 0;

const array = []

let i = 0
while (i <= 673) {
    array.push({x: x, y: y})

    ctx.strokeStyle = "gray";
    ctx.strokeRect(x, y, 20, 20);

    x += 20

    if (x > 520) {
        y += 20
        x = 0
    }

    i ++
}

const makeSnakeEnergy = () => {
    const index = Math.floor(Math.random()*array.length)

    const energy = array[index]
    ctx.fillStyle = "red";
    ctx.fillRect(energy.x, energy.y, 20, 20)
}

// console.log(array)

const snake = () => {
    const newArray = [...array]
    const snakeCells = []

    setInterval(() => {
        const cel = newArray.shift()

        if (snakeCells.length >= 4) {
            snakeCells.push(cel)
            snakeCells.shift()
        } else {
            snakeCells.push(cel)
        }

    }, 1000)
}

// TODO: MAKE SNAKE AND RUN MAKE SNAKE ENERGY
// TODO: SNAKEARRAY DOESNT UPDATE AND DRAW ALL HISTORY OF SNAKE!