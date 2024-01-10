const canvas = document.getElementById('canvas')
const image = document.getElementById('image')

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function getPixelAvg(imageData, i, j, offset) {
    let count = 0

    let r = 0;
    let g = 0;
    let b = 0;

    for (let s = i - offset; s <= i + offset; s++) {
        if (s > 0 && s < canvas.height) {
            for(let t = j - offset; t <= j + offset; t++) {
                if (t > 0 && t < canvas.width) {
                    const index = (s * canvas.width  + t) * 4
                    r += imageData[index]
                    g += imageData[index + 1]
                    b += imageData[index + 2]
                    count += 1
                }
            }
        }
    }

    return {
        r: r/count, g: g/count, b: b/count
    }
}

image.addEventListener('load', (e) => {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)

    const imageData = ctx.getImageData(0,0, canvas.width, canvas.height)

    const temp = [...imageData.data]

    for (let i = 0; i < canvas.height; i++) {
        for(let j = 0; j < canvas.width; j++) {
            const index = (i * canvas.width  + j) * 4
            const avg = getPixelAvg(imageData.data, i, j, 2)

            temp[index] = avg.r
            temp[index + 1] = avg.g
            temp[index + 2] = avg.b
        }
    }

    imageData.data.set(temp)

    ctx.putImageData(imageData, 0, 0)
})
