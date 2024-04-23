const unoWrapper = document.querySelector('.unoWrapper')

const colors = ['red', 'blue', 'green', 'yellow']
const specialColors = ['plus','return', 'stop']
const special = ['plus','color']
let cardBox = []
let gamer = []
let me = []

const isStarted = true

const cardBoxGenerator = () => {
    colors.forEach((color) => {
        // number-color
        for (let i = 0; i < 10; i++) {
            cardBox.push({
                color: color,
                number: `${i}`,
                sign: ''
            })
        }
        // sign-color
        for (let i = 0; i < specialColors.length; i++) {
            cardBox.push({
                color: color,
                number: '',
                sign: specialColors[i]
            })
        }
    })
    // special
    for (let i = 0; i < special.length; i++) {
        for (let j = 0; j < 4; j++) {
            cardBox.push({
                color: '',
                number: '',
                sign: special[i]
            })
        }
    }
}

cardBoxGenerator()

const spreadCards = (cardBoxHand = []) => {
    const randomIndex = Math.floor(Math.random() * (cardBox.length - 1 ) +1)
    cardBoxHand.push(cardBox[randomIndex])
    cardBox.splice(randomIndex, 1)

    if (cardBoxHand.length < 10) {
        return spreadCards(cardBoxHand)
    }

    return cardBoxHand
}

gamer = spreadCards()
me = spreadCards()

const cardGenerator = (card, parent, type= '') => {
    const cardWrapper = document.createElement('div')
    cardWrapper.classList.add('cardWrapper')
    parent.appendChild(cardWrapper)

    if (cardWrapper.previousElementSibling) {
        cardWrapper.style.marginLeft = '10px'
    }

    if (card.color) {
        cardWrapper.style.backgroundColor = card.color

        if (card.number) {
            const numberWrapper = document.createElement('div')
            const number = document.createElement('span')
            cardWrapper.appendChild(numberWrapper)
            numberWrapper.appendChild(number)
            numberWrapper.classList.add('numberWrapper')
            number.classList.add('number')

            numberWrapper.style.color = card.color

            number.innerText = card.number
        }

        if (card.sign) {
            if (card.sign === 'return') {
                const signWrapper = document.createElement('div')
                const sign = document.createElement('img')
                cardWrapper.appendChild(signWrapper)
                signWrapper.classList.add('return')
                signWrapper.appendChild(sign)
                sign.classList.add('returnImage')

                sign.src = '/projects/uno_card/assets/arrows-rotate-regular.svg'

                if (card.color === 'red') {
                    sign.style.filter = 'brightness(0) saturate(100%) invert(10%) sepia(100%) saturate(7150%) hue-rotate(0deg) brightness(100%) contrast(107%)'
                }

                if (card.color === 'blue') {
                    sign.style.filter = 'brightness(0) saturate(100%) invert(8%) sepia(100%) saturate(6986%) hue-rotate(247deg) brightness(105%) contrast(139%)'
                }

                if (card.color === 'green') {
                    sign.style.filter = 'brightness(0) saturate(100%) invert(31%) sepia(26%) saturate(3825%) hue-rotate(91deg) brightness(96%) contrast(101%)'
                }

                if (card.color === 'yellow') {
                    sign.style.filter = 'brightness(0) saturate(100%) invert(97%) sepia(51%) saturate(6437%) hue-rotate(357deg) brightness(105%) contrast(104%)'
                }
            }
        }
    }
}

const handCardsToGamer = () => {
    const cardsWrapper = document.createElement('div')
    unoWrapper.appendChild(cardsWrapper)
    cardsWrapper.classList.add('cardsWrapper')
    cardsWrapper.classList.add('cardsWrapperGamer')

    gamer.forEach((gamerCard) => {
        cardGenerator(gamerCard, cardsWrapper,'gamer')
    })
}

const handCardsToMe = () => {
    const cardsWrapper = document.createElement('div')
    unoWrapper.appendChild(cardsWrapper)
    cardsWrapper.classList.add('cardsWrapper')

    me.forEach((gamerCard) => {
        cardGenerator(gamerCard, cardsWrapper,'me')
    })
}

handCardsToGamer()
handCardsToMe()

// TODO
// clean functions
// me cards should be hidden
// cards with same colors should be in order
// detect selection and hover
// local storage
// generate other cards