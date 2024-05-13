const unoCardWrapper = document.querySelector('.unoCardWrapper')
const startGame = document.querySelector('.startGame')

const colors = ['red', 'blue', 'green', 'yellow']
const specialColors = ['plus','return', 'stop']
const special = ['plus','color']
let cardBox = []
let gamer = []
let mahrokh = []
let gameCard = {}

let isStarted = localStorage.getItem('isStarted') || false
let whoseTurn = 'mahrokh' | 'gamer'

// Filter of Red Blue Yellow and green for svg icons in img
const colorFilter = (color) => {
    if (color === 'red') {
        return 'brightness(0) saturate(100%) invert(10%) sepia(100%) saturate(7150%) hue-rotate(0deg) brightness(100%) contrast(107%)'
    } else if (color === 'blue') {
        return 'brightness(0) saturate(100%) invert(8%) sepia(100%) saturate(6986%) hue-rotate(247deg) brightness(105%) contrast(139%)'
    } else if (color === 'green') {
        return 'brightness(0) saturate(100%) invert(31%) sepia(26%) saturate(3825%) hue-rotate(91deg) brightness(96%) contrast(101%)'
    } else if (color === 'yellow') {
        return 'brightness(0) saturate(100%) invert(97%) sepia(51%) saturate(6437%) hue-rotate(357deg) brightness(105%) contrast(104%)'
    }
}

// Create Bank of Cards
const cardBoxGenerator = () => {
    colors.forEach((color, index) => {
        // number-color
        for (let i = 0; i < 10; i++) {
            cardBox.push({
                id: `${index}${i}`,
                color: color,
                number: `${i}`,
                sign: ''
            })
        }
        // sign-color
        for (let i = 0; i < specialColors.length; i++) {
            cardBox.push({
                id: `${index}${i + 10}`,
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
                id: `${i + 4}${j}`,
                color: '',
                number: '',
                sign: special[i]
            })
        }
    }
}

// Shuffle Bank of Cards
const shuffleCardBox = () => {
    for (let i = cardBox.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardBox[i], cardBox[j]] = [cardBox[j], cardBox[i]];
    }
    return cardBox;
}

// Create Cards of Gamer and Mahrokh
const spreadCards = (cardBoxHand = []) => {
    const randomIndex = Math.floor(Math.random() * (cardBox.length - 1 ) +1)
    cardBoxHand.push(cardBox[randomIndex])
    cardBox.splice(randomIndex, 1)

    if (cardBoxHand.length < 10) {
        return spreadCards(cardBoxHand)
    }

    return cardBoxHand
}

// Generate Mahrokh Card in html
const cardGenerator = (card, parent = '') => {
    const cardWrapper = document.createElement('div')
    cardWrapper.classList.add('cardWrapper')
    cardWrapper.setAttribute('data-card-id', card?.id)

    if (parent) {
        parent.appendChild(cardWrapper)
    } else {
        unoCardWrapper.appendChild(cardWrapper)
        cardWrapper.classList.add('bankCardWrapper')
    }

    const unoWrapper = document.createElement('div')
    cardWrapper.appendChild(unoWrapper)
    unoWrapper.classList.add('wrapper')
    unoWrapper.classList.add('unoWrapper')

    const uno = document.createElement('span')
    unoWrapper.appendChild(uno)
    uno.classList.add('uno')
    uno.innerText = 'UNO'
}

// Generate Gamer Card in html
const gamerGenerator = (card = gameCard, parent = '') => {
    const cardWrapper = document.createElement('div')
    if (parent) {
        parent.appendChild(cardWrapper)
    } else {
        unoCardWrapper.appendChild(cardWrapper)
        cardWrapper.classList.add('gameCardWrapper')
    }
    cardWrapper.classList.add('cardWrapper')
    cardWrapper.setAttribute('data-card-id', card?.id)

    if (card?.color) {
        cardWrapper.style.backgroundColor = card?.color

        if (card?.number || card?.sign === 'plus') {
            const numberWrapper = document.createElement('div')
            cardWrapper.appendChild(numberWrapper)
            numberWrapper.classList.add('wrapper')
            numberWrapper.style.color = card?.color

            const number = document.createElement('span')
            numberWrapper.appendChild(number)
            number.classList.add('number')
            number.innerText = card?.number ? card?.number : '+2'
        } else if (card?.sign === 'return' || card?.sign === 'stop') {
            const signWrapper = document.createElement('div')
            cardWrapper.appendChild(signWrapper)
            signWrapper.classList.add('wrapper')

            const sign = document.createElement('img')
            signWrapper.appendChild(sign)
            sign.classList.add('returnImage')
            sign.src = card?.sign === 'return' ? '/projects/uno_card/assets/arrows-rotate-regular.svg' : '/projects/uno_card/assets/ban-regular.svg'
            sign.style.filter = colorFilter(card?.color)
        }
    } else {
        cardWrapper.style.backgroundColor = 'black'

        if (card?.sign === 'plus') {
            const numberWrapper = document.createElement('div')
            cardWrapper.appendChild(numberWrapper)
            numberWrapper.classList.add('wrapper')
            numberWrapper.style.color = 'black'

            const number = document.createElement('span')
            numberWrapper.appendChild(number)
            number.classList.add('number')
            number.innerText = '+4'
        } else if (card?.sign === 'color') {
            const circleWrapper = document.createElement('div')
            cardWrapper.appendChild(circleWrapper)
            circleWrapper.classList.add('circleWrapper')

            const leftTop = document.createElement('div')
            circleWrapper.appendChild(leftTop)
            leftTop.classList.add('circlePart')
            leftTop.classList.add('leftTop')
            leftTop.style.filter = colorFilter('red')

            const rightTop = document.createElement('div')
            circleWrapper.appendChild(rightTop)
            rightTop.classList.add('circlePart')
            rightTop.classList.add('rightTop')
            rightTop.style.filter = colorFilter('blue')

            const leftBottom = document.createElement('div')
            circleWrapper.appendChild(leftBottom)
            leftBottom.classList.add('circlePart')
            leftBottom.classList.add('leftBottom')
            leftBottom.style.filter = colorFilter('yellow')

            const rightBottom = document.createElement('div')
            circleWrapper.appendChild(rightBottom)
            rightBottom.classList.add('circlePart')
            rightBottom.classList.add('rightBottom')
            rightBottom.style.filter = colorFilter('green')
        }
    }
}

// Hand Cards of Mahrokh
const handCardsToMahrokh = () => {
    const cardsWrapper = document.createElement('div')
    unoCardWrapper.appendChild(cardsWrapper)
    cardsWrapper.classList.add('cardsWrapper')
    cardsWrapper.classList.add('cardsWrapperMahrokh')

    mahrokh.forEach((gamerCard) => {
        cardGenerator(gamerCard, cardsWrapper)
    })
}

// Hand Cards of Gamer
const handCardsToGamer = () => {
    const cardsWrapper = document.createElement('div')
    unoCardWrapper.appendChild(cardsWrapper)
    cardsWrapper.classList.add('cardsWrapper')
    cardsWrapper.classList.add('cardsWrapperGamer')

    gamer.forEach((gamerCard) => {
        gamerGenerator(gamerCard, cardsWrapper)
    })
}

// Hand Card Bank
const handCardBank = () => {
    const validCards = cardBox.filter((card) => !card.sign)
    cardGenerator(validCards[0])
}

// Hand Game Card
const findGameCard = (box) => {
    const randomIndex = Math.floor(Math.random() * (box.length - 1 ) +1)
    gameCard = box[randomIndex]
    box.splice(randomIndex, 1)

    return gameCard
}

const deleteSelectedCard = (bank) => {
    // delete from mahrokh cards
    const deletedIndex = bank.findIndex((card) => card?.id === gameCard?.id)
    bank.splice(deletedIndex, 1)

    // update local storage
    localStorage.setItem(`${whoseTurn}Card`, whoseTurn === 'mahrokh' ? JSON.stringify(privateCards(bank)) : JSON.stringify(bank))
}

const giveCardProcess = (matchableCards) => {
    if (whoseTurn === 'mahrokh') {
        gameCard = findGameCard(matchableCards)

        if (gameCard) {
            gamerGenerator()
        } else {
            console.log('Couldnt Find')
        }

        localStorage.setItem('gameCard', JSON.stringify(gameCard))

        deleteSelectedCard(mahrokh)

        // delete card node
        const mahrokhWrapper = document.querySelector('.cardsWrapperMahrokh')
        if (mahrokhWrapper.hasChildNodes()) {
            mahrokhWrapper.childNodes.forEach((child) => {
                if (child.getAttribute('data-card-id') === gameCard?.id) {
                    child.remove()
                }
            })
        } else {
            // TODO winning
            console.log('Gamer Won')
        }

        whoseTurn = 'gamer'
        cardSelection()
    } else {
        const gamerWrapper = document.querySelector('.cardsWrapperGamer')

        if (gamerWrapper.hasChildNodes()) {
            gamerWrapper.childNodes.forEach((child) => {
                matchableCards.forEach((matchableCard) => {
                    if (child.getAttribute('data-card-id') === matchableCard.id) {
                        child.classList.add('playCardWrapper')
                    }
                })
            })

            const playChildren = document.querySelectorAll('.playCardWrapper')
            playChildren.forEach((playChild) => {
                playChild.addEventListener('click', () => {
                    gameCard = gamer.find((card) => card.id === playChild.getAttribute('data-card-id'))
                    localStorage.setItem('gameCard', JSON.stringify(gameCard))
                    gamerGenerator()
                    deleteSelectedCard(gamer)
                    playChild.remove()

                    whoseTurn = 'mahrokh'
                    cardSelection()
                })
            })
        } else {
            // TODO winning
            console.log('Gamer Won')
        }
    }
}

const matchableFinder = (type) => {
    let matchableCards = null
    const bank = whoseTurn === 'mahrokh' ? mahrokh : gamer

    if (type === 'number') {
        matchableCards = bank.filter((card) => (card?.color === gameCard?.color) || (card?.number === gameCard?.number))
    } else if (type === 'plus-color') {
        matchableCards = bank.filter((card) => card?.color === gameCard?.color && card?.sign === 'plus')
    } else if (type === 'plus') {
        matchableCards = bank.filter((card) => card?.sign === 'plus')
    }

    return matchableCards
}

// Mahrokh Selection
const cardSelection = () => {
    if ((whoseTurn === 'mahrokh' && mahrokh.length > 0) || (whoseTurn === 'gamer' && gamer.length > 0)) {
        if (!gameCard?.sign) {
            const matchableCards = matchableFinder('number')
            if (matchableCards.length > 0) {
                giveCardProcess(matchableCards)
            } else {
                // TODO: Take
                console.log('Take Card 1')
            }
        } else {
            if (gameCard?.sign === 'plus') {
                if (gameCard?.color) {
                    const matchableCards = matchableFinder('plus-color')

                    if (matchableCards.length > 0) {
                        giveCardProcess(matchableCards)
                    } else {
                        const matchableCards = matchableFinder('plus')

                        if (matchableCards.length > 0) {
                            giveCardProcess(matchableCards)
                        } else {
                            // TODO: Take
                            console.log('Take Card 2')
                        }
                    }
                } else {
                    const matchableCards = matchableFinder('plus')
                    if (matchableCards.length > 0) {
                        giveCardProcess(matchableCards)
                    } else {
                        // TODO: Take
                        console.log('Take Card 3')
                    }
                }
            } else if (gameCard?.sign === 'return' || gameCard?.sign === 'stop') {
                const prevWhoseTurn = whoseTurn
                whoseTurn = prevWhoseTurn === 'gamer' ? 'mahrokh' : 'gamer'
                localStorage.setItem('whoseTurn', whoseTurn)
            } else if (gameCard?.sign === 'color') {
                // TODO: not logical
                const prevWhoseTurn = whoseTurn
                whoseTurn = prevWhoseTurn === 'gamer' ? 'mahrokh' : 'gamer'
                localStorage.setItem('whoseTurn', whoseTurn)
            }
        }
    } else {
        // TODO winner
        console.log('winner')
    }
}

const privateCards = (cards) => {
    return cards.map((card) => card?.id)
}

// Functions run when game started and set local storages
const gameStarted = () => {
    // if (isStarted) {
    unoCardWrapper.style.display = 'flex'

    const localStorageCardBox = localStorage.getItem('cardBox')
    const localStorageGamerCard = localStorage.getItem('gamerCard')
    const localStorageMahrokhCard = localStorage.getItem('mahrokhCard')
    const localStorageGameCard = localStorage.getItem('gameCard')
    const localStorageWhoseTurn = localStorage.getItem('whoseTurn')

    if (localStorageCardBox) {
        cardBox = JSON.parse(localStorageCardBox)

        // Shuffle Before Handing
        cardBox = shuffleCardBox()
    } else {
        // Create CardBox
        cardBoxGenerator()

        // Shuffle Before Handing
        cardBox = shuffleCardBox()

        localStorage.setItem('cardBox', JSON.stringify(cardBox))
    }

    // Create Cards of Gamer and Mahrokh
    // TODO: what about counts of cards
    if (localStorageMahrokhCard) {
        mahrokh = cardBox.filter((card) => JSON.parse(localStorageMahrokhCard).includes(card?.id))
    } else {
        mahrokh = spreadCards()

        localStorage.setItem('mahrokhCard', JSON.stringify(privateCards(mahrokh)))
    }

    if (localStorageGamerCard) {
        gamer = JSON.parse(localStorageGamerCard)
    } else {
        gamer = spreadCards()

        localStorage.setItem('gamerCard', JSON.stringify(gamer))
    }

    // Shuffle After Handing
    cardBox = shuffleCardBox()

    // Hand Card To Mahrokh
    handCardsToMahrokh()

    // Hand Card To Gamer
    handCardsToGamer()

    // Hand Card Bank
    handCardBank()

    // Hand Game Card
    if (localStorageGameCard) {
        gameCard = JSON.parse(localStorageGameCard)
    } else {
        gameCard = findGameCard(cardBox)
        localStorage.setItem('gameCard', JSON.stringify(gameCard))
    }

    gamerGenerator()

    // Detect Turn and Play Game
    if (localStorageWhoseTurn) {
        whoseTurn = localStorageWhoseTurn
    } else {
        whoseTurn = 'mahrokh'
        localStorage.setItem('whoseTurn', `${whoseTurn}`)
    }

    setTimeout(() => {
        cardSelection()
    }, 3000)
    // }
}

startGame.addEventListener('click', () => {
    unoCardWrapper.innerHTML = ''
    isStarted = true
    localStorage.setItem('isStarted', isStarted)

    gameStarted()
})

gameStarted()


// TODO
// cards with same colors should be in order
// detect selection
