import Player from "./player.js";

class Board {
    boardCells = Array(8).fill(0).map(() => Array(8).fill(0));
    players;

    constructor() {
        this.players = [
            new Player('White'),
            new Player('Black'),
        ];

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
}

export default Board;