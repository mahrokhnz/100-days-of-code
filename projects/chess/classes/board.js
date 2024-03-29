import Player from "./player.js";

class Board {
    boardCells = Array(8).fill(0).map(() => Array(8).fill(0));
    players;

    constructor() {
        this.players = [
            new Player('White'),
            new Player('Black'),
        ];
        this.wrapper = document.querySelector('.boardWrapper')

        this.#renderPlayers();
    }

    #renderPlayers() {
        this.players.forEach((player) => {
            player.pieces.forEach((piece) => {
                const row = +(piece.place[1] - 1)
                const column = piece.place[0].charCodeAt(0) - 97

                this.boardCells[row][column] = piece
            })
        })
    }

    render() {
        this.boardCells.forEach((rowCells, rowIndex) => {
            const row = document.createElement('div')
            row.classList.add('row')

            rowCells.forEach((rowCell, cellIndex) => {
                const cell = document.createElement('div')
                cell.classList.add('cell')

                if (rowIndex%2 === 0) {
                    if (cellIndex%2 === 0) {
                        cell.classList.add('light')
                    } else {
                        cell.classList.add('dark')
                    }
                } else {
                    if (cellIndex%2 === 0) {
                        cell.classList.add('dark')
                    } else {
                        cell.classList.add('light')
                    }
                }

                if (rowCell !== 0) {
                    this.#renderChessMans(cell, rowCell)
                } else {
                    cell.addEventListener('click' , () => {
                        this.#clickCellHandler()
                    })
                }

                row.appendChild(cell)
            })

            this.wrapper.appendChild(row)
        })
    }

    #renderChessMans(wrapper, item) {
        const iconWrapper = document.createElement('div')
        iconWrapper.classList.add('iconWrapper')

        iconWrapper.addEventListener('click', () => {
            this.#clickChessManHandler(item, )
        })

        iconWrapper.innerHTML = item.icon
        iconWrapper.classList.add(item.color)

        wrapper.appendChild(iconWrapper)
    }

    #clickChessManHandler() {
        console.log('Chessman')
    }

    #clickCellHandler() {
        console.log('Cell')
    }
}

export default Board;