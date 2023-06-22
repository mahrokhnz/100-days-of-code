const svgProjects = document.querySelector(".svgProjectsWrapper");
const animationProjects = document.querySelector(".animationProjectsWrapper");
const canvasProjects = document.querySelector(".canvasProjectsWrapper");
const classProjects = document.querySelector(".classProjectsWrapper");
const draggingProjects = document.querySelector(".draggingProjectsWrapper");
const gameProjects = document.querySelector(".gameProjectsWrapper");
const otherProjects = document.querySelector(".otherProjectsWrapper");
const apiProjects = document.querySelector(".apiProjectsWrapper");
const storeDataProjects = document.querySelector(".storingProjectsWrapper");

fetch('./projects.json')
    .then((response) => response.json())
    .then((json) => {
        createCategories(json)
    });

const findParent = (category) => {
    let parentNode = null

    if (category === 'svg') {
        parentNode = svgProjects
    } else if (category === 'animation') {
        parentNode = animationProjects
    } else if (category === 'canvas') {
        parentNode = canvasProjects
    } else if (category === 'other') {
        parentNode = otherProjects
    } else if (category === 'game') {
        parentNode = gameProjects
    } else if (category === 'dragging') {
        parentNode = draggingProjects
    } else if (category === 'api') {
        parentNode = apiProjects
    } else if (category === 'storeData') {
        parentNode = storeDataProjects
    } else {
        parentNode = classProjects
    }

    return parentNode
}

const createCard = (project, category) => {
    const challenge = document.createElement('div')
    category.appendChild(challenge)

    challenge.classList.add('challenge')
    challenge.style.backgroundImage = `url('./assets/${project.address}.png')`

    const button = document.createElement('button')
    button.classList.add('showChallenge')
    challenge.appendChild(button)

    const link = document.createElement('a')
    link.href = `./projects/${project.address}`
    link.target = '_blank'
    link.innerHTML = project.title
    button.appendChild(link)
}

const createCategories = (projects) => {
    projects.animation.map((project) => {
        const category = findParent('animation')
        createCard(project, category)
    })
    projects.canvas.map((project) => {
        const category = findParent('canvas')
        createCard(project, category)
    })
    projects.class.map((project) => {
        const category = findParent('class')
        createCard(project, category)
    })
    projects.dragging.map((project) => {
        const category = findParent('dragging')
        createCard(project, category)
    })
    projects.game.map((project) => {
        const category = findParent('game')
        createCard(project, category)
    })
    projects.other.map((project) => {
        const category = findParent('other')
        createCard(project, category)
    })
    projects.svg.map((project) => {
        const category = findParent('svg')
        createCard(project, category)
    })
    projects.api.map((project) => {
        const category = findParent('api')
        createCard(project, category)
    })
    projects.storeData.map((project) => {
        const category = findParent('storeData')
        createCard(project, category)
    })
}


