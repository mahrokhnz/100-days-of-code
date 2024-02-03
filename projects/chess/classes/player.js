import {
    King,
    Queen,
    Bishop,
    Knight,
    Rook,
    Pawn
} from "./chessmans/index.js";

class Player {
    color;
    pieces = [];

    constructor(color) {
        this.color = color;

        this.pieces.push(
            new King(color),
            new Queen(color),

            new Bishop(color, false),
            new Bishop(color, true),

            new Knight(color, false),
            new Knight(color, true),

            new Rook(color, false),
            new Rook(color, true),
        );

        for (let i = 0; i < 8; i++) {
            const col = String.fromCharCode(97 + i);

            this.pieces.push(new Pawn(color, col));
        }
    }
}

export default Player;