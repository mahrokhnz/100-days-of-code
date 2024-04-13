const container = document.querySelector('.imageSlider')
const slider = document.querySelector('.slider')

let imagesArray = []
let sliderImagesArray = []

const classOrder = {
    '-2': 'tertiary--2',
    '-1': 'secondary--1',
    '0': 'primary-0',
    '1': 'secondary-1',
    '2': 'tertiary-2',
}
fetch('./assets/galaxy.json').then((response) => response.json()).then((json) => {
        imagesArray = [...json]
        sliderImagesArray = [...json]
        createSlider(imagesArray)
    });

const createSlider = (images) => {
    images.forEach((img) => {
        const image = document.createElement('img')
        container.appendChild(image)

        image.src = `./assets/${img.url}.jpg`
        image.classList.add(`${img.class}`)

        image.setAttribute("data-index", img.index)
    })
}

let prevSliderValue = slider.value
slider.addEventListener('input', () => {
    sliderImagesArray.forEach((image) => {
        const regex = /-(.*)/

        const index = +(regex.exec(image.class)[1])

        if (slider.value - prevSliderValue === 1) {
            if (classOrder[index - 1]) {
                image.class = classOrder[index - 1]
            } else if (index - 1 === -3) {
                image.class = classOrder[2]
            }
        }

        if (slider.value - prevSliderValue === -1) {
            if (classOrder[index + 1]) {
                image.class = classOrder[index + 1]
            } else if (index + 1 === +3) {
                image.class = classOrder[-2]
            }
        }

        const imageTags = document.querySelectorAll('.imageSlider img')

        imageTags.forEach((img) => {
            if (img.getAttribute('data-index') === image.index) {
                img.className = ''
                img.classList.add(image.class)
            }
        })
    })

    prevSliderValue = slider.value
})